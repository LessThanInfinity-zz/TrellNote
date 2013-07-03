class BoardsController < ApplicationController
  respond_to :html, :only => [:index]

	def index
		@boards= Board.where({user_id: current_user.id})

		respond_to do |format|
			format.json { render :json => @boards.to_json({
				:include => {
					:lists => {:include => {
					 :cards => {:include => [:tasks]
					} 
				}
			
		}
	}
	})
}
		format.json { render :index }
		end
	end


end
