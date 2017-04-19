class RemoveHexcolorFromTag < ActiveRecord::Migration[5.0]
  def up
    remove_column :tags, :hexcolor, :string
  end

	def down
    add_column :tags, :hexcolor, :string
	end
end
