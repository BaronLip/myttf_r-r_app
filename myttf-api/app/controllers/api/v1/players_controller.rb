class Api::V1::PlayersController < ApplicationController

    def index
        players = Player.all
        # prior code, in case "if " statement fails. 
        # render json: players, status: 200
        if players
            render json: {
                players: players,
                status: 200
            }
        else
            render json: {
                status: 500,
                errors: ["no players found"]
            }
        end
    end

    def show
        player = Player.find(params[:id])
        matches = player.matches
        games = player.games
        
        if player
            render json: {
                player: player,
                matches: matches,
                games: games,
                status: 200
            }
        else
            render json: {
                status: 500,
                errors: ['user not found']
            }
        end
    end

    # def create
    #     player = Player.create(player_params)

    #     render json: @player, status: 200
    # end

    # def update
    #     player = Player.find(params[:id])
    #     player.update(player_params)

    #     render json: player, status: 200
    # end

    # def destroy
    #     player = Player.find(params[:id])
    #     player.delete

    #     render json: {playerId: player.id}
    # end

    # private

    # def player_params
    #     params.require(:player).permit(:username, :profileImage, :wins, :losses)
    # end

end
 