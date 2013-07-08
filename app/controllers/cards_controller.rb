class CardsController < ApplicationController
  respond_to :html, :only => [:index]

  def create

    @card = Card.new(params[:card])
    @card.list_id = params[:list_id]
    @card.list_position = params[:list_position]

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

  def update
  	@card = Card.find(params[:id])
  	@card.update_attributes(params[:card])

	  if @card.save    
      render :json => @card
    else
      render :json => @card.errors.full_messages, status: 422
    end
  end

end

