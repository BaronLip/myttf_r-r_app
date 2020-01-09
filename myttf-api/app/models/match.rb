class Match < ApplicationRecord
    validates_presence_of :date, :match_type
    # validates :opponent_name, length: { minimum: 3 }
    # validates :notes, length: { minimum: 5 }

    belongs_to :player
    has_many :games, dependent: :destroy

    accepts_nested_attributes_for :games, allow_destroy: true 
end
