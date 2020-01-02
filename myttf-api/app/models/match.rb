class Match < ApplicationRecord
    validates_presence_of :date, :match_type
    validates :opponent_name, length: { minimum: 3 }
    validates :notes, length: { minimum: 5 }

    # A match should belong to a player as well as the opponent, which is another player...

    belongs_to :player
    has_many :games, dependent: :destroy
end
