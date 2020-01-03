Rails.application.routes.draw do
    
    root to: 'home#index'

    namespace :api do
        namespace :v1 do
            resources :players, :matches, :games
            devise_for :players,
            # path: '', # Commented out since players can remain "/players" in routes.
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
    end
end
  