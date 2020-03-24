# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.create!([
    {   
    username: "Baron",
    email: "baron@baron.com",
    password: "baron",
    profileImage: "/images/Bitmoji_Baron_lr.png",
    wins: 1,
    losses: 1,
    },

    {   
    username: "Chad",
    email: "chad@chad.com",
    password: "chad",
    profileImage: "",
    wins: 0,
    losses: 0,
    },

    {   
    username: "Scott",
    email: "scott@scott.com",
    password: "scott",
    profileImage: "",
    wins: 0,
    losses: 0,
    },
    
    {   
    username: "Ryan",
    email: "ryan@ryan.com",
    password: "ryan",
    profileImage: "",
    wins: 0,
    losses: 0,
    },
])

Match.create!([
    {
    player_id: 1,
    date: "2019-12-26",
    opponent_name: "Chad",
    match_type: "5",
    notes: "His serves are illusive, watch the spin carefully.",
    bookmarked: false,
    win: true
    },
    {
    player_id: 1,
    date: "2019-12-20",
    opponent_name: "Scott",
    match_type: "7",
    notes: "Close the angle more against his slow loops.",
    bookmarked: false,
    win: nil
    },
])

Game.create!([
    {
        match_id: 1,
        player_score: 11,
        opponent_score: 8
    },
    {
        match_id: 1,
        player_score: 6,
        opponent_score: 11
    },
    {
        match_id: 1,
        player_score: 11,
        opponent_score: 9
    },
    {
        match_id: 1,
        player_score: 11,
        opponent_score: 6
    },
    {
        match_id: 2,
        player_score: 7,
        opponent_score: 11
    },
    {
        match_id: 2,
        player_score: 10,
        opponent_score: 12
    },
    {
        match_id: 2,
        player_score: 7,
        opponent_score: 11
    },
    {
        match_id: 2,
        player_score: 11,
        opponent_score: 5
    },
    {
        match_id: 2,
        player_score: 4,
        opponent_score: 11
    }
])