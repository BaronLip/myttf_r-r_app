class Api::V1::PlayersController < ApplicationController

    def index
        players = Player.all

        render json: @players, status: 200
    end

    def show
        player = Player.find(params[:id])
        matches = player.matches
        
        render json: {
            player: player,
            matches: matches
        },
        status: 200
    end

    def create
        player = Player.create(player_params)

        render json: @player, status: 200
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
 