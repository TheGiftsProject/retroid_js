class ApplicationController < ActionController::Base
  protect_from_forgery

  rescue_from Exception, :with => :render_error

  protected

  def render_error(error)
    render :json => { :ack => "failure", :message => error.message }, :callback => params[:callback]
  end

  def render_success(content)
    render :json => { :ack => "success" }.merge!(content), :callback => params[:callback]
  end
end
