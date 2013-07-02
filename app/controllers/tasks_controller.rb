class TasksController < ApplicationController
  respond_to :json
  respond_to :html, :only => [:index]

	def index
		@tasks= Task.where(user_id: current_user.id)

		respond_to do |format|
			format.json { render :json => @tasks }
			format.json { render :index }
		end
	end


end
