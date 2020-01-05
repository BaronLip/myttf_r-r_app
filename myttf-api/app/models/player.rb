class Player < ApplicationRecord
    has_many :matches, dependent: :destroy
    has_many :games, through: :matches
end
