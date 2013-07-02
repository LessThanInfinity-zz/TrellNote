Trellnote::Application.routes.draw do

  devise_for :users
  resources :tasks
  root :to => "roots#root" #tasks#index" 

  resource :root do 
  	member do
  		get 'currentUser'
  	end
  end
end
