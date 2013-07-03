Trellnote::Application.routes.draw do

  devise_for :users
  resources :tasks
  resources :boards
  root :to => "roots#root" #tasks#index" 


  resource :root, :only =>[] do 

  	member do
  		get 'currentUser'
  	end
  end
end
