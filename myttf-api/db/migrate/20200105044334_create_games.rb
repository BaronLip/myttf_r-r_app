class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :player_score
      t.integer :opponent_score
      t.references :match, foreign_key: true

      t.timestamps
    end
  end
end
