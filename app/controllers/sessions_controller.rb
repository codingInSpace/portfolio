class SessionsController < Devise::SessionsController
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
		sign_out(user)
		head :no_content
	end
end

