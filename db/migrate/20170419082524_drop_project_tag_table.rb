class DropProjectTagTable < ActiveRecord::Migration[5.0]
	def up
    drop_table :project_tags
	end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
