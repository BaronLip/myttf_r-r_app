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
        # Create a Match for the games to be saved.
        match = Match.new(match_params)
        match.player_id = params[:player_id] # separately add in player_id due to associations.
        match.save
        
        # Creating all the variables to work with. 
        player = Player.find_by(:id => match.player_id)
        games = []
        games_params = params[:games]
        i = 0
        win = 0
        loss = 0
        
        # For every game in params,
        games_params.each do |game|
            game = Game.new # Create a new game,
            game.match_id = match.id # add the match_id to associate it to this match,
            # game.player_id = match.player_id # Not needed since can be reached through matches.
            game.player_score = games_params[i][:player_score] # Add the individual scores.
            game.opponent_score = games_params[i][:opponent_score]
            
            # Tally up wins & losses.
            game.player_score > game.opponent_score ? win += 1 : loss += 1
            # Save the game.
            game.save
            
            # After saving the game, go on to the next game.
            if game.save
                games.push(game)
                i = i + 1
            else
                error = game.errors.full_messages
                render json: error, status: 500
            end
        end

        # Add a win or loss to the player based on game scores. 
        win > loss ? player.wins += 1 : player.losses += 1
        # Save the player.
        player.save

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
