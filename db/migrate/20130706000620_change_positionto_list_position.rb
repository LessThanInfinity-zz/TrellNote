class ChangePositiontoListPosition < ActiveRecord::Migration
  def change
  	rename_column :cards, :position, :list_position
  end
end
