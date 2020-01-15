# MyTTF_React-Redux_app

### Dependencies: 
React\
Redux - $ npm install redux\
React-Redux - $ npm install react-redux\
React-Router - $ npm install --save react-router\
React-Router-Dom - $ npm install react-router-dom\
React-Redux-Devtools - $ npm install --save-dev redux-devtools\
Redux-Thunk - $ npm install --save redux-thunk\
~$ npm install --save-dev @babel/plugin-proposal-throw-expressions~\
~$ npm install --save-dev @babel/plugin-syntax-throw-expressions~\
Rails 5.2.4 with Postgresql - $ rails new myttf-api --api --database=postgresql\
Yarn - $ brew install yarn\
Semantic UI - $ yarn add semantic-ui-react\
Babel-ESlint = $ npm install --save-dev babel-eslint\


### Boot-up:
*** Be sure to start backend first. Localhost is configured to be 3000.\
cd to myttf-api directory.\
    $ rails s\
cd to myttf-frontend directory.\
    $ npm start\


### Follow-ups:
Add login functionality.\
Add additional attributes for player.\
Create validations with alerts.\
Improve CSS,... in so many ways.\
Additional win:loss logic in match controller:\
1. Adjust win:loss count when deleting a match.\
~~Redirect back to dashboard after editing match.~~\
~~Use _destroy key within attributes hash to destroy nested games within Match hash.~~\
~~Create separate controller method for bookmarking matches.~~\