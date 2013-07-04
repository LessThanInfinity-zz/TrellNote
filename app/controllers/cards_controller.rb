class CardsController < ApplicationController
  respond_to :html, :only => [:index]

	# def index
	# 	@cards= Card.where({user_id: current_user.id})

	# 	respond_to do |format|
	# 		format.json { render :json => @cards.to_json({
	# 			:include => {
	# 				:lists => {:include => {
	# 				 :cards => {:include => [:tasks]
	# 									} 
	# 							}			
	# 					}
	# 				}
	# 			})
	# 		}

	# 	format.json { render :index }
	# 	end
	# end

  def create
    @card = Card.new(params[:card])
    @card.list_id = params[:list_id]
	
		# debugger

    if @card.save
      render :json => @card
    else
      render :json => @card.errors.full_messages, status: 422
    end
  end


  def destroy
    @card = Card.find(params[:id])
    @card.destroy

    render :json => "success"
  end
end

