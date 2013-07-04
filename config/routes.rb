Trellnote::Application.routes.draw do

  devise_for :users do
	  resources :boards do
	  	resources :lists do
	  		resources :cards do
	  			resources :tasks
	  		end
	  	end
  	end
  end

  # ^^^ remember to restructure to only include required routes

  root :to => "roots#root" #tasks#index" 


  resource :root, :only =>[] do 

  	member do
  		get 'currentUser'
  	end
  end
end
