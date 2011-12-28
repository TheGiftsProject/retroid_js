class LogicsController < ApplicationController
  def index
    render :json => { :ack => "success", :objects => Logic.all.as_json(:include_root_in_json => false) }
  end

  def create
    # params[:logic] should contain:
    #   author
    #   name
    #   code
    logic = Logic.create!(params[:logic])
    render :json => { :ack => "success", :object => logic.as_json(:include_root_in_json => false) }
  rescue => e
    render :json => { :ack => "failure", :message => e.message }
  end

  def update
    logic = Logic.find_by_id(params[:id])

    vote = (params[:vote] == "up" ? 1 : -1)
    logic.vote!(vote)

    render :json => { :ack => "success", :object => logic.as_json(:include_root_in_json => false) }
  rescue => e
    render :json => { :ack => "failure", :message => e.message }
  end
end
