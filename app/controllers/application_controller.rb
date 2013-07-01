class ApplicationController < ActionController::Base
  protect_from_forgery

	before_filter :authenticate_user!
  # add requirement that there is a user. 

end
