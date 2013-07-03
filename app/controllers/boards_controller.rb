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

  def create
    @board = Board.new(params[:board])
    @board.user_id = current_user.id
    if @board.save
      render :json => @board
    else
      render :json => @board.errors.full_messages, status: 422
    end
  end


  def destroy
    @board = Board.find(params[:id])
    @board.destroy

    render :json => "success"
  end


end
