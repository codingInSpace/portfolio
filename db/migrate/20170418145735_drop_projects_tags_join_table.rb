class DropProjectsTagsJoinTable < ActiveRecord::Migration[5.0]
	def up
    drop_table :projects_tags
	end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
