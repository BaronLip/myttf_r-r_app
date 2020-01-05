# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.create([
    {   
    username: "Baron Lip",
    profileImage: "/images/Bitmoji_Baron_lr.png",
    wins: 0,
    losses: 0,
    },

    {   
    username: "Chad",
    profileImage: "",
    wins: 0,
    losses: 0,
    },

    {   
    username: "Scott",
    profileImage: "",
    wins: 0,
    losses: 0,
    },
    
    {   
    username: "Ryan",
    profileImage: "",
    wins: 0,
    losses: 0,
    },
])

Match.create([
    {
    player_id: 1
    date: "2019-12-26",
    opponent_name: "Dani",
    match_type: "5",
    notes: "His serves are illusive, watch the spin carefully.",
    bookmarked: false
    },
    {
    player_id: 1
    date: "2019-12-20",
    opponent_name: "Scott",
    match_type: "5",
    notes: "Close the angle more against his slow loops.",
    bookmarked: false
    },
])