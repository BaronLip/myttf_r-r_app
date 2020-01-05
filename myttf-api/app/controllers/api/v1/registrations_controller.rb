class Api::V1::RegistrationsController < Devise::RegistrationsController
    respond_to :json

    def create
        byebug
        begin
            super
        rescue ActiveRecord::RecordInvalid => e
            render_resource(e.record)

        rescue ActiveRecord::RecordNotUnique => e
            err = OpenStruct.new(errors: { player: 'Already Exists' })
            validation_error(err)
        end
    end
end