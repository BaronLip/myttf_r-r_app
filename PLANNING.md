# MyTTF App Planning

### Steps:
0. Plan out app.
1. Setup Rails backend.
    - Authentication and Login.
    - Connects to React frontend.
    - Data persists throughout app.
2. Setup React frontend.
    - Checkoff list:
        1. ES6 syntax.
        2. Use create-react-app.
        3. 2 container components.
        4. 5 stateless/functional components.
        5. React-router with 3 Routes.
        6. Redux with Redux-thunk middleware for async actions.
        7. Data persists to Rails API.

### App flow
1. Login page:
    - Input fields:
        1. Username
        2. E-mail
        3. Submit
2. Dashboard page:
    - Name
    - Stats:
        1. Wins
        2. Losses
        3. percentage wins?
    - Create a match form button (w/animation to show module?):
        1. Date
        2. Opponent name
        3. Match to 7 or 5?
            - Show relevant number of fields for each game.
            - Player's score : Opponent's score for each game field.
        4. Note
            - Title?
            - Text area.
        5. Record button.
3.  Matches section on bottom:
    - Show each match in separate "card".
        1. "Star" feature to highlight important match.
        2. Preview of notes.

### Completed:
- Install react-redux
- Install redux
- Install redux-devtools
- Created store
- Used and imported combineReducers
- Create login form