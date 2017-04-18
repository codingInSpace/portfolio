class TagsController < ApplicationController
	before_action :set_project
	before_action :set_project_tag, only: [:show, :update, :destroy]

	# GET /projects/:project_id/tags
  def index
    json_response(@project.tags)
  end

	# GET /projects/:project_id/tags/:id
	def show
		json_response(@tag)
	end

	# POST /projects/:project_id/tags
	def create
		#@project.tags.create!(tag_params)
    #json_response(@project, :created)
	end

	# PUT /projects/:project_id/tags/:id
	def update
		@tag.update(tag_params)
    head :no_content
	end

	# DELETE /projects/:project_id/tags/:id
	def destroy
		@tag.destroy
    head :no_content
	end

  private

	def item_params
    params.permit(:label, :hexcolor)
	end

	# Get projects that include this tag
	def get_including_projects
		@jointable = ProjectTag.find(tag_id: params[:id])
	end

	def set_project
		@project = Project.find(params[:project_id])
	end

	def set_project_tag
    @tag = @project.tags.find_by!(id: params[:id]) if @project
	end
end
