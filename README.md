# Portfolio

## Rails Environment
Ruby 2.4.0   
Rails 5.0.2  
postgresql 9.6.1-3  

## Usage and development

### Setup PosgresQL
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

### Develop frontend separately
```bash
cd frontend  
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

### Run api separately
```bash
rails db:migrate
rails s
```

### Run api test suite
```bash
bundle exec rspec
```

## Functional specification
A portfolio application, that serves as a personal page and a platform to showcase a person's projects. A user can be authenticated and manage projects in a CMS section. A project item consists of an image, description, relevant links, tags etc. Blog/news posts may be added to fill out more content.

## Technical specification
*Front end*: React with Redux, Redux-saga or Redux-thunk, a UI library yet to be decided (preliminary [grommet](https://grommet.github.io/)) and possibly css modules depending on the need to complement the UI library.

*Back end*: Rails 5 api (json rest api), decoupled from the front end. There are a few options that interates client side and the Rails back end, an integration with webpack is coming in Rails 5.1 and is currently experimental, but a safe option seems to be to keep a Rails api only lightweight application not bound together with the client. PostgreSQL as a database suits Rails well when deployed on Heroku.

*Test suite*: Suitable ruby gems for Rails server side (rspec-rails, shoulda_matchers, database_cleaner, faker). For client, snapshot based tests with Jest.

*Deployment*: Heroku

