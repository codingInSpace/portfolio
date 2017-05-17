class TagsController < ApplicationController
	before_action :set_project
	before_action :set_project_tag, only: [:show, :update, :destroy]

	# GET /projects/:project_id/tags
	# GET /tags
  def index
		if @project
			json_response(@project.tags)
		else
			json_response(Tag.all)
		end
  end

	# GET /projects/:project_id/tags/:id
	def show
		json_response(@tag)
	end

	# POST /projects/:project_id/tags
	def create
		@project.tags.create!(tag_params)
    json_response(@project, :created)
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

	def tag_params
    params.permit(:label)
	end

	def set_project
		if params[:project_id]
			@project = Project.find(params[:project_id])
		end
	end

	def set_project_tag
    @tag = @project.tags.find_by!(id: params[:id]) if @project
	end
end
