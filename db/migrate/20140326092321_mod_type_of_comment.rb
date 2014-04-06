class ModTypeOfComment < ActiveRecord::Migration
  def change
     change_table :queries do |t|
      t.remove :comment
       t.text :comment
     end
  end
end
