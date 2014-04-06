class CreateQueries < ActiveRecord::Migration
  def change
    create_table :queries do |t|
      t.string :name
      t.string :email
      t.string :phone
      t.string :comment

      t.timestamps
    end
  end
end
