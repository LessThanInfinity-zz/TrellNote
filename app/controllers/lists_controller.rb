class ListsController < ApplicationController
respond_to :html, :only => [:index]

  def create
    @list = List.new(params[:list])
    @list.board_id = params[:board_id]
		debugger
    if @list.save
      render :json => @list
    else
      render :json => @list.errors.full_messages, status: 422
    end
  end


  def destroy
    @list = List.find(params[:id])
    @list.destroy

    render :json => "success"
  end
end

