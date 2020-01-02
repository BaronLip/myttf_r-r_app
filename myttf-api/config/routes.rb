Rails.application.routes.draw do
    
    root to: 'home#index'

    namespace :api do
        namespace :v1 do
            resources :players
            resources :matches
            resources :games
        end
    end
    
    # devise_for :players
    devise_for :players,
        path: '',
        path_names: {
            sign_in: 'login',
            sign_out: 'logout',
            registration: 'signup'
        },
        controllers: {
            sessions: 'sessions',
            registrations: 'registrations'
        }

end
  