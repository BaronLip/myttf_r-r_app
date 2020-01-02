class ApplicationController < ActionController::API
    # Added for JWT functionality.
    respond_to :json

    def render_resource(resource)
        if resource.errors.empty?
        render json: resource
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
end
