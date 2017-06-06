class ClienthandlerController < ActionController::Base
  def fallback_index_html
    puts "hej!"
    render :file => 'public/index.html'
  end
end
