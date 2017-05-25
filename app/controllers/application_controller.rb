class ApplicationController < ActionController::API
	include Response
  include ExceptionHandler

	acts_as_token_authentication_handler_for User, fallback: :exception

	private

	def after_successful_token_authentication
		# Make the authentication token disposable
		renew_authentication_token!
	end
end

