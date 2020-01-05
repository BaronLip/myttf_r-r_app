class Api::V1::PlayersController < ApplicationController
    before_action :authenticate_api_v1_player!, except: [:create]

    def index
        players = Player.all

        render json: players, status: 200
    end
 
    def show
        player = Player.find(params[:id])

        render json: player, status: 200
    end

    def create
        byebug
        player = Player.create(player_params)
        render json: player, status: 200
    end

    def update
        player = Player.find(params[:id])
        player.update(player_params)

        render json: player, status: 200
    end

    def destroy
        player = Player.find(params[:id])
        player.delete

        render json: {playerId: player.id}
    end

    private

    def player_params
        params.require(:player).permit(:username, :profileImage, :wins, :losses)
    end



end
 