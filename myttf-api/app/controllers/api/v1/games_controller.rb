class Api::V1::GamesController < ApplicationController
    before_action :authenticate_player!

    def index
        @games = Game.all
        render json: @games, status: 200
    end

    def show
        @game = Game.find(params[:id])
        render json: @game, status: 200
    end

    def create
        @game = Game.create(game_params)

        if @game.save
            render json: @game, status: 200
            puts "Game saved."
        else
            error = @game.errors.full_messages
            render json: error, status: 500
            puts error
        end
    end

    def update
        @game = Game.find(params[:id])
        if @game.update(game_params)
            render json: @game, status: 200
            puts "Game updated"
        else
            error = @game.errors.full_messages
            render json: error, status: 500
            puts error
        end
    end

    def destroy
        @game = Game.find(params[:id])
        @game.delete

        render json: {gameId: @game.id}
        puts "Game deleted."
    end

    private

    def game_params
        params.require(:game).permit(:opponent_score, :player_score)
    end
end
