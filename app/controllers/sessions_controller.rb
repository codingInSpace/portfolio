class SessionsController < Devise::SessionsController
	include ActionController::MimeResponds

	acts_as_token_authentication_handler_for User, fallback: :none
	before_action :require_auth!, only: [:destroy]
	skip_before_action :verify_signed_out_user, only: :destroy

	def create
		# Find user for given email
		user = User.where(email: params[:email]).first

		# If no user found or password invalid, send unauthorized 
		if user&.valid_password?(params[:password])
			render json: user.as_json(only: [:id, :email, :authentication_token]), status: :created
		else
			head(:unauthorized)
		end
		

		#respond_to do |format|
    #   format.any(*navigational_formats) { super }
    #   format.json do
    #     self.resource = warden.authenticate!(auth_options)
    #     sign_in(resource_name, resource)
    #     respond_with_authentication_token(resource)
    #   end
    #end
	end

	def destroy
		current_user.authentication_token = nil
		current_user.save
		sign_out(current_user)
		head :no_content
	end

	private

	def require_auth!
		throw(:warden, scope: :user) unless current_user.presence
	end
end

