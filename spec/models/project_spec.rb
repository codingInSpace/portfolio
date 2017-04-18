require 'rails_helper'

RSpec.describe Project, type: :model do
	# ensure relationship
	it { should have_many(:tags).through(:project_tags) }

	# validate main columns present before saving
	it { should validate_presence_of(:title) }
	it { should validate_presence_of(:short_desc) }
end
