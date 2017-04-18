class Tag < ApplicationRecord
	has_and_belongs_to_many :projects

	validates_presence_of :label
end
