require 'rails_helper'

RSpec.describe Tag, type: :model do
	it { should belong_to(:project) }

	# validate main columns present before saving
	it { should validate_presence_of(:label) }
end
