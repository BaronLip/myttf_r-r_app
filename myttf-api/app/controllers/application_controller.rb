class ApplicationController < ActionController::API
    # Line 4 added for JWT functionality.
    # But then removed as it caused a bug...1:30:40 in the video.
    # respond_to :json

    rescue_from ActiveRecord::RecordNotFound, with: :unauthorized_error
    rescue_from AuthorizationError, with: :unauthorized_error

    def render_resource(resource)
        if resource.errors.empty?
        render json: resource, include: with
        else
        validation_error(resource)
        end
    end

    def validation_error(resource)
        render json: {
        errors: [
            {
            status: '400',
            title: 'Bad Request',
            detail: resource.errors,
            code: '100'
            }
        ]
        }, status: :bad_request
    end

    def authorize_player_resource(resource)
        raise AuthorizationError.new if resource.player != current_player
    end

    def unauthorized_error
        render json: { message: "You are not authorized" }, status: 401
    end 

    def not_found
        render json: { message: "Resource not found"}, status: 404
    end
end
