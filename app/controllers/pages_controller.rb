class PagesController < ApplicationController
  def index
  end
  def videos
    @videos = Video.all
    render json: {data: @videos}
  end
end
