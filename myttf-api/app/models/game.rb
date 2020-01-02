class Game < ApplicationRecord
    belongs_to :match, dependent: :destroy
    belongs_to :player, dependent: :destroy    
end
