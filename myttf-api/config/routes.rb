# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      get 'login', to: 'sessions#create'
      get 'logged_in', to: 'sessions#is_logged_in?'
      post 'login', to: 'sessions#create'
      delete 'logout', to: 'sessions#destroy'
      
      resources :players, only: [:index, :create, :show] do 
        resources :matches do
            resources :games
        end
      end
    end
  end  
end
