class Player < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :username, uniqueness: true
    validates :password, presence: true
    validates :password, uniqueness: true
    
    has_many :matches, dependent: :destroy
    has_many :games, through: :matches
end
