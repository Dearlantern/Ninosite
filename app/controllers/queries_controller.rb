class QueriesController < ApplicationController
  # GET /queries
  # GET /queries.json
  def index
    @queries = Query.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @queries }
    end
  end



  # GET /queries/new
  # GET /queries/new.json
  def new
    @query = Query.new

    respond_to do |format|
      format.html # new.html.erb
    end
  end


  # POST /queries
  # POST /queries.json
  def create
    @query = Query.new(params[:query])

    respond_to do |format|
      if @query.save
        format.html { redirect_to root_url, notice: 'Query was successfully created.' }
      else
        format.html { render action: "new" }
      end
    end
  end


  # DELETE /queries/1
  # DELETE /queries/1.json
  def destroy
    @query = Query.find(params[:id])
    @query.destroy

    respond_to do |format|
      format.html { redirect_to queries_url }
      format.json { head :no_content }
    end
  end
end
