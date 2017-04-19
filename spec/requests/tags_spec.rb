require 'rails_helper'

RSpec.describe 'Portfolio tags API' do

	# init test data
	let!(:project) { create(:project) }
  let!(:tags) { create_list(:tag, 5, project_id: project.id) }
  let(:project_id) { project.id }
  let(:id) { tags.first.id }

	# GET /projects/:project_id/tags
	describe 'GET /projects/:project_id/tags' do
    before { get "/projects/#{project_id}/tags" }

    context 'when project exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns all project tags' do
        expect(json.size).to eq(5)
      end
    end

    context 'when project does not exist' do
      let(:project_id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Project/)
      end
    end
  end

	# GET /projects/:project_id/tags/:id
  describe 'GET /projects/:project_id/tags/:id' do
    before { get "/projects/#{project_id}/tags/#{id}" }

    context 'when project tag exists' do
      it 'returns status code 200' do
        expect(response).to have_http_status(200)
      end

      it 'returns the tag' do
        expect(json['id']).to eq(id)
      end
    end

    context 'when project tag does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Tag/)
      end
    end
  end

	# PUT /projects/:project_id/tags
  describe 'POST /projects/:project_id/tags' do
    let(:valid_attributes) { { label: 'AI' } }

    context 'when request attributes are valid' do
      before { post "/projects/#{project_id}/tags", params: valid_attributes }

      it 'returns status code 201' do
        expect(response).to have_http_status(201)
      end
    end

    context 'when an invalid request' do
      before { post "/projects/#{project_id}/tags", params: {} }

      it 'returns status code 422' do
        expect(response).to have_http_status(422)
      end

      it 'returns a failure message' do
        expect(response.body).to match(/Validation failed: Label can't be blank/)
      end
    end
  end

  # PUT /projects/:project_id/tags/:id
  describe 'PUT /projects/:project_id/tags/:id' do
    let(:valid_attributes) { { label: 'AI' } }

    before { put "/projects/#{project_id}/tags/#{id}", params: valid_attributes }

    context 'when tag exists' do
      it 'returns status code 204' do
        expect(response).to have_http_status(204)
      end

      it 'updates the tag' do
        updated_tag = Tag.find(id)
        expect(updated_tag.label).to match(/AI/)
      end
    end

    context 'when the tag does not exist' do
      let(:id) { 0 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Tag/)
      end
    end
  end

	# DELETE /projects/:id
  describe 'DELETE /projects/:id' do
    before { delete "/projects/#{project_id}/tags/#{id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end
