export default (state = 
    [
        {   
            username: "Baron Lip",
            profileImage: "/images/Bitmoji_Baron_lr.png",
            wins: 0,
            losses: 0,
            matches: [
                {
                    playerScore: 11,
                    opponentScore: 9,
                }
            ]
        }
    ]
    , action) => {
    
    console.log("reducers/PlayersReducer.js")
    
    switch (action.type) {
        case "ADD_PLAYER":
            console.log("You're adding a player", state, action);
            
            return [...state, action.player];
    
        default:
            return state;
    }
}