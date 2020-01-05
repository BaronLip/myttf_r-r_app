class Game < ApplicationRecord
  belongs_to :match
  belongs_to :player, through: :match
end
