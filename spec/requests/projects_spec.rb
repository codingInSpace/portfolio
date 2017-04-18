require 'rails_helper'

RSpec.describe 'Portfolio API Projects', type: :request do

	# init test data
	let!(:projects) { create_list(:project, 10) }
	let(:project_id) { projects.first.id }

	# Test GET /projects
	describe 'GET /projects' do
    # make HTTP get request before each example
    before { get '/projects' }

    it 'returns projects' do
      # Note `json` is a custom helper to parse JSON responses
      expect(json).not_to be_empty
      expect(json.size).to eq(10)
    end

    it 'returns status code 200' do
      expect(response).to have_http_status(200)
    end
  end

	# Test GET /project/:id
	describe 'GET /projects/:id' do
    before { get "/projects/#{project_id}" }

		context 'when the record exists' do
			it 'returns the project' do
				expect(json).not_to be_empty
				expect(json['id']).to eq(project_id)
			end

			it 'returns status code 200' do
				expect(response).to have_http_status(200)
			end
		end

		context 'when the record does not exist' do
      let(:project_id) { 100 }

      it 'returns status code 404' do
        expect(response).to have_http_status(404)
      end

      it 'returns a not found message' do
        expect(response.body).to match(/Couldn't find Project/)
      end
    end
  end

	# Test DELETE /projects/:id
  describe 'DELETE /projects/:id' do
    before { delete "/projects/#{project_id}" }

    it 'returns status code 204' do
      expect(response).to have_http_status(204)
    end
  end
end

