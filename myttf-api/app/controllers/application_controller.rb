require "pry"
class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    include ActionController::Helpers
    include ActionController::Cookies

    helper_method :login!, :logged_in?, :current_player, :authorized_player?, :logout!

    def login!
        binding.pry
        session[:player_id] = @player.id
    end
    
    def logged_in?
        !!session[:player_id]
    end

    def current_player
        current_player ||= Player.find(session[:player_id]) if session[:player_id]
    end

    def authorized_player?
        @player == current_player
    end

    def logout!
        session.clear
    end

end
