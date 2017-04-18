class CreateTags < ActiveRecord::Migration[5.0]
  def change
    create_table :tags do |t|
      t.string :label
      t.string :hexcolor

      t.timestamps
    end
  end
end
