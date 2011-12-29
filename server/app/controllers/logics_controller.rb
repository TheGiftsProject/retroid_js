class LogicsController < ApplicationController
  before_filter :remove_root_from_json

  def index
    render_success(:objects => Logic.all)
  end

  def create
    # params[:logic] should contain:
    #   author
    #   name
    #   code
    logic = Logic.create!(params[:logic])
    render_success(:object => logic)
  end

  def vote
    # params[:vote] should contain:
    #   up || down
    if (params[:vote].nil?)
      raise StandardError.new("Parameter 'vote' missing")
    end

    logic = Logic.find(params[:id])

    vote = (params[:vote] == "up" ? 1 : -1)
    logic.vote!(vote)

    render_success(:object => logic)
  end

  def destroy
    Logic.destroy(params[:id])

    render_success(:deleted_object => params[:id])
  end

  def logic
    logic = Logic.find(params[:id])
    render :json => { :ack => "success", :object => logic }, :callback => params[:callback]
  end

  protected

  def remove_root_from_json
    ActiveRecord::Base.include_root_in_json = false
  end
end
