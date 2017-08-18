namespace 'static_server' do
  task :stop do
    assets_role = fetch(:assets_role)
    on roles(assets_role) do |host|
      within release_path do
        execute 'bundle', 'install'
        execute 'bundle', 'exec', 'thin', '-R', 'static_server.ru', '-C', 'config/static_server.yml', 'stop'
      end
    end
  end

  task :start do
    assets_role = fetch(:assets_role)
    on roles(assets_role) do |host|
      within release_path do
        execute 'bundle', 'exec', 'thin', '-R', 'static_server.ru', '-C', 'config/static_server.yml', '-d', 'start'
      end
    end
  end
end