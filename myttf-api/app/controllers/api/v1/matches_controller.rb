class Api::V1::MatchesController < ApplicationController
    before_action :authenticate_player!

    def index
        matches = current_player.matches
        render json: matches.to_json(include: [:games])
    end

    def show
        match = Match.find(params[:id])
        authorize_player_resource(match) 
        # render json: @match, status: 200
        render_resource(match, with: [:games])
    end

    def create
        match = Match.new(match_params)
        match.player = current_player
        match.save
        render_resource(match)
        # if @match.save
        #     render json: match, status: 200
        #     puts "Match saved."
        # else
        #     error = @match.errors.full_messages
        #     render json: error, status: 500
        #     puts error
        # end
    end

    def update
        match = Match.find(params[:id])
        authorize_player_resource(match)
        match.update(match_params)
        render_resource(match)
        # if match.update(match_params)
        #     render json: @match, status: 200
        #     puts "Match updated."
        # else
        #     error = @match.errors.full_messages
        #     render json: error, status: 500
        #     puts error
        # end
    end

    def destroy
        match = Match.find(params[:id])
        authorize_player_resource(match)
        match.delete
        render_resource(match)
        # render json: {matchId: @match.id}
        # puts "Match deleted."
    end

    private

    def match_params
        params.require(:match).permit(:player_id, :date, :opponent_name, :match_type, :notes, :bookmarked)
    end

end
