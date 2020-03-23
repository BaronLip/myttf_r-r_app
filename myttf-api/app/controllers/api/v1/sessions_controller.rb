class Api::V1::SessionsController < ApplicationController

    def create
        byebug
        player = Player.find_by(email: session_params[:email])

        if player && player.authenticate(session_params[:password])
            login!
            render json: {
                logged_in: true,
                player: player
            } 
        else
            render json: {
                status: 401,
                errors: ["no such player, verify credentials and try agin or signup"]
            }
        end
    end

    def is_logged_in?
        if logged_in? && current_player
            render json: {
                logged_in: true,
                player: current_player
            }
        else
            render json: {
                logged_in: false,
                message: "No such player."
            }
        end
    end

    def destroy
        logout!
        render json: {
            status: 200,
            logged_out: true
        }
    end

    private

    def session_params
        params.require(:player).permit(:username, :email, :password)
    end

end
