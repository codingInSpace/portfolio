class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :short_desc
      t.string :long_desc
      t.string :src_url
      t.string :app_url
      t.string :app_link_label
      t.string :projectteam

      t.timestamps
    end
  end
end
