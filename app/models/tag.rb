class Tag < ApplicationRecord
	belongs_to :project
	validates_presence_of :label
end
