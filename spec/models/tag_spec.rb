require 'rails_helper'

RSpec.describe Tag, type: :model do
	it { should have_and_belong_to_many(:projects) }

	# validate main columns present before saving
	it { should validate_presence_of(:label) }
end
