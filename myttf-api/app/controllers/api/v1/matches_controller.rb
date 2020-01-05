class Api::V1::MatchesController < ApplicationController

    def index
        matches = Match.where(player_id: params[:player_id])
        render json: @matches, status: 200
    end

    def show
        match = Match.find(params[:id])
        games = match.games
        
        render :json => 
        {
            :match => match,
            :games => games
        },
         status: 200
    end

    def create
        match = Match.create(match_params)

        if match.save
            render json: match, status: 200
        else
            error = match.errors.full_messages
            render json: error, status: 500
            return error
        end
    end

    def update
        match = Match.find(params[:id])
        if match.update(match_params)
            render json: @match, status: 200
        else
            error = @match.errors.full_messages
            render json: error, status: 500
            return error
        end
    end

    def destroy
        match = Match.find(params[:id])
        match.delete

        render json: {matchId: match.id}
    end

    private

    def match_params
        params.require(:match).permit(:date, :opponent_name, :match_type, :notes, :bookmarked)
    end

end
