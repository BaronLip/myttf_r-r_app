class Api::V1::MatchesController < ApplicationController

    def index
        matches = Match.where(player_id: params[:player_id])
        render json: matches, status: 200
    end

    def show
        match = Match.find(params[:id])
        games = match.games
        
        render json: {
            match: match,
            games: games
        },
        status: 200
    end

    def create
        match = Match.new(match_params)
        match.player_id = params[:player_id] # separately add in player_id due to associations.
        match.save
        
        games = []
        i = 0
        games_params = params[:games]
        games_params.each do |game|
            game = Game.new
            game.match_id = match.id
            # game.player_id = match.player_id # Not needed since can be reached through matches.
            game.player_score = games_params[i][:player_score]
            game.opponent_score = games_params[i][:opponent_score]
            game.save
            
            if game.save
                games.push(game)
                i = i + 1
            else
                error = game.errors.full_messages
                render json: error, status: 500
            end
        end

        if match.save
            render json: { 
                match: match,
                games: games
            }, status: 200
        else
            error = match.errors.full_messages
            render json: error, status: 500
        end
    end

    def update
        match = Match.find(params[:id])
        # match.update
        games = match.games
        i = 0
        params_games = params[:games]
        
        params_games.each do |game|
            if game[:id]
                gameObj = match.games.find_by(id: game[:id])
                gameObj.update(player_score: game[:player_score], opponent_score: game[:opponent_score])
                i += 1
            else
                game = Game.new
                game.match_id = match.id
                game.player_score = params_games[i][:player_score]
                game.opponent_score = params_games[i][:opponent_score]
                game.save
                match.games << game
                match.save
                i += 1
            end
        end

        if match.update(match_params)
            render json: {
                match: match,
                games: games
            }, status: 200
        else
            error = match.errors.full_messages
            render json: error, status: 500
        end
    end

    def destroy
        match = Match.find(params[:id])
        games = match.games

        games.destroy_all
        
        match.delete

        render json: {matchId: match.id}
    end

    private

    def match_params
        params.require(:match).permit(
            :date, 
            :opponent_name, 
            :match_type, 
            :notes, 
            :bookmarked, 
            games_attributes: [:player_score, :opponent_score],
            # :id,
            # :player_id,
            # :created_at,
            # :updated_at
        )
    end
end
