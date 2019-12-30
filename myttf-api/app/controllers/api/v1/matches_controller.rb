class Api::V1::MatchesController < ApplicationController

    def index
        @matches = Match.all

        render json: @matches, status: 200
    end

    def show
        @match = Match.find(params[:id])

        render json: @match, status: 200
    end

    def create
        @match = Match.create(match_params)

        render json: @match, status: 200
    end

    def update
        @match = Match.find(params[:id])
        @match.update(match_params)
        render json: @match, status: 200
    end

    def destroy
        @match = Match.find(params[:id])
        @match.delete

        render json: {matchId: @match.id}
    end

    private

    def match_params
        params.require(:match).permit(:date, :opponent_name, :match_type, :notes, :bookmarked)
    end

end
