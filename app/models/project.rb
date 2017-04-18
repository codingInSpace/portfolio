class Project < ApplicationRecord
	has_and_belongs_to_many :tags

	validates_presence_of :title, :short_desc
end
