class Project < ApplicationRecord
	has_many :project_tags
  has_many :tags, :through => :project_tags

	validates_presence_of :title, :short_desc
end
