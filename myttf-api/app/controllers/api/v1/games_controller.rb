class Api::V1::GamesController < ApplicationController

    def index
        games = Game.where(match_id: params[:match_id])
        render json: games, status: 200
    end

    def create 
        game = Game.new(game_params)
        if game.save
            render json: game, status: 200
        end
    end

    def update
        game = Game.find(params[:id])
        game.update(player_params)

        render json: game, status: 200
    end

    def destroy
        game = Game.find(params[:id])
        game.delete

        render json: {gameId: game.id}
    end

    private

    def game_params
        params.require(:game).permit(:player_score, :opponent_score)
    end
    
end
