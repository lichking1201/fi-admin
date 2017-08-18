# config valid only for current version of Capistrano
lock "3.8.1"

set :application, "hunter_frontend"
set :repo_url, "git@gitlab.fishtrip.cn:fe/hunter.git"

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, "/var/www/my_app_name"
set :deploy_to, '/opt/work/hunter-fe'

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

set :assets_role, :app_leader

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

append :linked_dirs, "log", "run"

# Default value for linked_dirs is []

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

after "deploy", "fe:compile"

namespace :deploy do
  before :starting, :pull_local_git do
    git_branch = fetch(:branch)
    %x(git checkout -f #{git_branch})
    %x(git pull origin #{git_branch})
  end

  after :updated, :compile_static_file do
    invoke "fe:compile"
    invoke "fe:sync_assets"
  end

  after :publishing, :compile_and_restart do
    invoke "static_server:stop"
    invoke "static_server:start"
  end
end