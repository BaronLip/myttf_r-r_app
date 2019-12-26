console.log("reducers/PlayersReducer.js")

export default (state = 
    [
        // {   
        //     username: "Baron Lip",
        //     profileImage: "/images/Bitmoji_Baron_lr.png",
        //     wins: 0,
        //     losses: 0,
        //     // matches: [
        //     // ]
        // }
    ]
    , action) => {
    

    switch (action.type) {
        case "ADD_PLAYER":
            console.log("You're adding a player", state, action);
            return [...state, action.player];

        case "FETCH_PLAYER":
            console.log("You're fetching a player", state, action);
            return {
                ...state
            }
    
        default:
            return state;
    }
}