# MyTTF_React-Redux_app

### Dependencies: 
React
Redux - $ npm install redux
React-Redux - $ npm install react-redux
React-Router - $ npm install --save react-router
React-Router-Dom - $ npm install react-router-dom
React-Redux-Devtools - $ npm install --save-dev redux-devtools
Redux-Thunk - $ npm install --save redux-thunk
~$ npm install --save-dev @babel/plugin-proposal-throw-expressions~
~$ npm install --save-dev @babel/plugin-syntax-throw-expressions~
Rails 5.2.4
Yarn - $ brew install yarn
~~Postgresql~~
Semantic UI - 
    CDN - https://react.semantic-ui.com 
    $ yarn add semantic-ui-react
$ rails new myttf-api --api --database=postgresql


### Boot-up:
cd to myttf-api directory.
    $ rails s
cd to myttf-frontend directory.
    $ npm start


### Follow-ups:
Add login functionality.
Create validations with alerts.
Redirect back to dashboard after editing match.

### Devise JWT installation process:
Resources:\
https://www.youtube.com/watch?v=qjtht03t7z4&feature=youtu.be\
https://medium.com/@mazik.wyry/rails-5-api-jwt-setup-in-minutes-using-devise-71670fd4ed03\
https://jwt.io/\
https://github.com/plataformatec/devise\
https://github.com/waiting-for-dev/devise-jwt\
https://github.com/waiting-for-dev/devise-jwt/wiki/Configuring-devise-for-APIs\
https://github.com/bkeepers/dotenv/blob/master/README.md\

As the attempt to document the process of adding Devise became too intricate, please refer to the resources noted above.

1. Gemfile add:
    a. gem 'devise-jwt', '~> 0.5.9'\
    b. gem 'dotenv-rails', groups: [:development, :test]\
    c. $ bundle install\

2. $ rails generate devise:install
    Follow the instructions in command line interface:\
    a. config/environments/development.rb:\
        - config.action_mailer.default_url_options = { host: 'localhost', port: 3001 }\
    b. config/routes.rb\
        - root to: "home#index"\
    c. Numbers 3 & 4 are not needed since this is an API.\

3. Config/initializers/devise.rb:
    This document is critical in informing how to configure Devise for authorization.
    a. Under the header "==> Configuration for any authentication mechanism"
        - Uncomment out the last line: "config.authentication_keys = [:email]"
        This designates email as an authorization key.
    b. Comment out line 21: "config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'"
    c. Line 91: add ", :params_auth" inside the square brackets. (Not clear if this is required.)

4. $ rails generate devise Model("Player" in this case.)\
    a. This adds Devise code to an existing Model or creates a new model of that name.\
    b. Also adds a migration file for the model, giving Devise to that model.\
        - Additionally add ":registerable" within the Player model.\
        - See below, comment out the second block of devise code and then run c.
        ```ruby
            class Player < ApplicationRecord
            # Include default devise modules. Others available are:
            # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
            devise :database_authenticatable, :registerable,
                    :recoverable, :rememberable, :validatable
                # devise :database_authenticatable,
                #      :jwt_authenticatable,
                #      jwt_revocation_strategy: JWTBlacklist
            end
        ```
    c. $ rails g model jwt_blacklist jti:string\
    d. After step c. completes comment out the top devise code block and uncomment out the bottom devise code block.\
    e. In model migration file, update "blacklists" to "blacklist". Remove the "s" on the filename, classname, and tablename withing xxxxxxxxxx_create_jwt_blacklists.rb

5. 
   a. 
 