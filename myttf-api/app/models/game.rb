class Game < ApplicationRecord
    belongs_to :match
    # Ommiting player association and will be associated with Match only.
    # A game technically belongs to the player and opponent. 
    # belongs_to :player, dependent: :destroy    
end
