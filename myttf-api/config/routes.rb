Rails.application.routes.draw do
     devise_for :players
    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    namespace :api do
        namespace :v1 do
        resources :players
        resources :matches
        end
    end  
end
  