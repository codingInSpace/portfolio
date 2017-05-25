class Project < ApplicationRecord
	has_many :tags, dependent: :destroy
	validates_presence_of :title, :short_desc
end
