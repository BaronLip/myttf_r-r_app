# MyTTF_React-Redux_app

## Dependencies: 
Using the command line or terminal, please install the following:\
React - This app was created using "create-react-app". It requires node.js, which should include NPM and NPX. Visit nodejs.org for the latest version. 
1. Redux - $ npm install redux
2. React-Redux - $ npm install react-redux
3. React-Router - $ npm install --save react-router
4. React-Router-Dom - $ npm install react-router-dom
5. React-Redux-Devtools - $ npm install --save-dev redux-devtools
6. Redux-Thunk - $ npm install --save redux-thunk\
~$ npm install --save-dev @babel/plugin-proposal-throw-expressions~\
~$ npm install --save-dev @babel/plugin-syntax-throw-expressions~
7. Rails 5.2.4 with Postgresql - $ rails new myttf-api --api --database=postgresql
8. Yarn - $ brew install yarn\
Semantic UI - $ yarn add semantic-ui-react\
Babel-ESlint = $ npm install --save-dev babel-eslint


## Boot-up:
1. Download the zip file.
2. Navigate to the directory within your command line or text editor.\
*** Be sure to start backend first. Localhost is configured to be 3000.
3. cd to myttf-api directory.\
   start your rails server with terminal command - $ rails s
4. cd to myttf-frontend directory.\
   start your node server with terminal command - $ npm start
5. Open your web browser and type in the address "http://localhost:3001/". This should bring you to a simple page with a headerbar across the top. Click on the dashboard button to enter the main page. 


## Follow-ups:
1. Add login functionality.
   * https://medium.com/how-i-get-it/react-with-rails-user-authentication-8977e98762f2 
2. Add additional attributes for player.
3. Create validations with alerts.
4. Improve CSS,... in so many ways.
~~Additional win:loss logic in match controller:~~\
~~Redirect back to dashboard after editing match.~~\
~~Use _destroy key within attributes hash to destroy nested games within Match hash.~~\
~~Create separate controller method for bookmarking matches.~~\
~~Matches are sorted by whether they are bookmarked or not.~~\