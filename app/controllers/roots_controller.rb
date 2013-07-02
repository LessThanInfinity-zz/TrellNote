class RootsController < ApplicationController

	def root
	end

	def currentUser
		render :json => current_user
	end

end
