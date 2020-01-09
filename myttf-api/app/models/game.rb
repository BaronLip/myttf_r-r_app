class Game < ApplicationRecord
  belongs_to :match
  # belongs_to :player # Not needed. Player accesses games through Match.
end
