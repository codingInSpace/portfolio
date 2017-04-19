class AddProjectToTags < ActiveRecord::Migration[5.0]
  def change
    add_reference :tags, :project, foreign_key: true
  end
end
