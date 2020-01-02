class AddPlayerIdToMatches < ActiveRecord::Migration[5.2]
  def change
    add_column :matches, :player_id, :integer
  end
end
