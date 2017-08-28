namespace :fe do
  task :compile do
    env = fetch(:fe_env)
    run_locally do
      execute :rm, '-rf', "public/"
      execute :sh, "fe.sh", env
      execute 'cp', '-r', 'public/.', "public-#{env}/"
    end
  end

  task :sync_assets do
    env = fetch(:fe_env)
    on roles(:app_leader), in: :sequence do |host|
      run_locally do
        execute :rsync, '-avzr', "public-#{env}/ #{host.user}@#{host.hostname}:#{release_path}/public/"
      end
    end
  end

end
