class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
    	t.integer :card_id
    	t.string :title
    	t.text :details

      t.timestamps
    end
	  add_index :tasks, :card_id
  end


end
