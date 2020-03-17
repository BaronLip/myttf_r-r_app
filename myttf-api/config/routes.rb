# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  get "/api/v1/login", to: "sessions#create"

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
