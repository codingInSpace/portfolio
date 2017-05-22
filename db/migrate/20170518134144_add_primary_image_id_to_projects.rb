class AddPrimaryImageIdToProjects < ActiveRecord::Migration[5.0]
  def change
  	add_column :projects, :primary_image_id, :string
  end

	def self.down
  	add_column :projects, :primary_image_id, :string
	end
end
