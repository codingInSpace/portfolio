# Portfolio
Personal page portfolio application, some static personal details but otherwise generalized.  

Stack:  
Rails API only back-end  
React+Redux frontend  

Todo:  
Make stuff cooler looking  
Show more details on project pages

## Rails Environment
Ruby 2.4.1   
Rails 5.0.2  
postgresql 9.6.1-3  

## Usage and development
### Setup PosgreSQL
Following the details in database.yml  
```bash
# psql
CREATE DATABASE portfolio_development;  
CREATE DATABASE portfolio_test;   
CREATE USER portfolio;  
ALTER USER portfolio WITH PASSWORD 'hacking-nasa123';  
ALTER DATABASE portfolio_development OWNER TO portfolio;  
ALTER DATABASE portfolio_test OWNER TO portfolio;   
```

### Run api separately
```bash
rails db:migrate
rails s
```

Run api test suite
```bash
bundle exec rspec
```

### Add the first Devise user 
Registrations are not enabled, [don't want people signing up on your portfolio and editing your projects!](http://i2.kym-cdn.com/entries/icons/original/000/022/138/reece.JPG)  
```bash
# rails console
user = User.create!({:email => "homer.simpson@gmail.com", :password => "123456", :password_confirmation => "123456" })
user.save

# On user.save, a token is generated e.g. authentication_token => "aBcDeFgH"
```

### Sample requests to the api
```bash
curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" --data '{"email": "homer.simpson@gmail.com", "password": "123456"}' http://localhost:3000/users/sign_in

# If email+password correct, this returns user  
# info along with a valid authentication token
# for the user, stored to be included in request 
# headers where authentication is required.

curl -X POST -H "Accept: application/json" -H "Content-Type: application/json" -H "X-User-Email: homer.simpson@gmail.com" -H "X-User-Token: aBcDeFgH" --data '{"title": "Most Beers In A Minute", "short_desc": "mmmm beer", "tags": ["MOES"]}' http://localhost:3000/api/projects

# Enjoy not getting 401
```

### Develop frontend separately
```bash
cd frontend  
```
```bash
cp .env.example .env # and make any changes  
yarn start
```

run eslint
```bash
yarn eslint
```

run eslint and fix fixable issues
```bash
yarn eslint:fix
```
