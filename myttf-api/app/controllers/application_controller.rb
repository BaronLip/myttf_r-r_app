class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    
    include ActionController::Helpers
    include ActionController::Cookies

    helper_method :login!, :logged_in?, :current_user, :authorized_user?, :logout!

    def login!
        session[:player_id] = player.id
    end
    
    def logged_in?
        !!session[:player_id]
    end

    def current_user
        current_user ||= Player.find(session[:player_id]) if session[:player_id]
    end

    def authorized_user?
        player == current_user
    end

    def logout!
        session.clear
    end
    
end
