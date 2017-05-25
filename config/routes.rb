# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
#
Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions' }
  devise_scope :user do
    post 'login' => 'sessions#create', :as => :login
    delete 'logout' => 'sessions#destroy', :as => :logout
  end

  scope '/api' do
		resources :projects do
			resources :tags
		end

		resources :tags, only: [:index]
	end
end
