class Player < ApplicationRecord
    has_many :matches, dependent: :destroy
    has_many :games, through: :matches
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    # devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
    
    devise :registerable,:database_authenticatable,
        :jwt_authenticatable,
        jwt_revocation_strategy: JwtBlacklist
end
 