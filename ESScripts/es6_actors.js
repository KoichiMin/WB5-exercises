"use strict"

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ];


// Who is the Academy Member whose ID is 187?

// console.log(academyMembers.find((member) => member.memID == 187))




// Who has been in at least 3 films?

// console.log(academyMembers.filter((member) => member.films.length >= 3))



// Who has a name that starts with "Bob"?

// const findBob = academyMembers.filter((member) =>{
//     return member.name.slice(0,3) === "Bob"
// })

// console.log(findBob)


// HARDER: Which Academy Members have been in a film that starts with "A"

const loopThroughMovies = (movies) =>{
    let arrayMovies = []
    for(let movie of movies){
        // console.log(movie.slice(0,1))
        if(movie.slice(0,1) === "A"){
            arrayMovies.push(movie)
        }
    }
    return arrayMovies
}

const filterMovieWithA = academyMembers.filter((member) =>{
    return loopThroughMovies(member.films).length > 0
})


console.log(filterMovieWithA)