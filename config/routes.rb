Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  scope '/api' do
		resources :projects do
			resources :tags
		end

		resources :tags, only: [:index]
	end
end
