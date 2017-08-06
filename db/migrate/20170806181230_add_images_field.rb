class AddImagesField < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :other_images, :string, array: true, default: []
  end
end
