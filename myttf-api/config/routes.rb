Rails.application.routes.draw do
    
    root to: 'home#index'

    namespace :api do
        namespace :v1 do
            resources :players, :matches, :games
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
            sessions: 'api/v1/sessions',
            registrations: 'api/v1/registrations'
        }

end
  