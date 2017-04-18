require 'rails_helper'

RSpec.describe ProjectTag, type: :model do
	it { should belong_to(:tag) }
	it { should belong_to(:project) }
end
