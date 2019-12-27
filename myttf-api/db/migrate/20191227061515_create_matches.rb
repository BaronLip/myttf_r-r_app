class CreateMatches < ActiveRecord::Migration[5.2]
   def change
      create_table :matches do |t|
         t.string :date
         t.string :opponent_name
         t.string :match_type
         t.text :notes
         t.boolean :bookmarked

         t.timestamps
      end
   end
end
