require 'rails_helper'

RSpec.describe Tag, type: :model do
	it { should have_many(:projects).through(:project_tags) }

	# validate main columns present before saving
	it { should validate_presence_of(:label) }
end
