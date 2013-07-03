Trellnote::Application.routes.draw do

  devise_for :users
  resources :tasks
  resources :boards
  resources :cards, :only => [:create, :destroy]
  root :to => "roots#root" #tasks#index" 


  resource :root, :only =>[] do 

  	member do
  		get 'currentUser'
  	end
  end
end
