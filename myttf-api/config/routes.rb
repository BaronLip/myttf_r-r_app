# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get "/api/v1/login", to: "sessions#create"
  get '/api/v1/logged_in', to: 'sessions#is_logged_in?'
  post '/api/v1/login', to: 'sessions#create'
  delete '/api/v1/logout', to: 'sessions#destroy'

  namespace :api do
    namespace :v1 do
      resources :players, only: [:index, :create, :show] do 
        resources :matches do
            resources :games
        end
      end
    end
  end  
end
