//import all data

import { getActors, getGenres, getTvShows } from "./database.js";

//save data to variables
const shows = getTvShows()
const actors = getActors()
const genres = getGenres()


//define a function that loops through the actors and finds the matching tv show
const findActorMatch = (showObj, ActorsArray) => {
    //set a empty variable to return
    let showStar = null 
    //loop thorugh actors
    for (const actor of ActorsArray) {
        //if show id matches  actor id
        if(actor.id === showObj.actorID) {
            showStar = actor
        }
    }
    return showStar
}

const findGenreMatch = (showObj, genreArray) => {
    let showGenre = null

    for (const genre of genreArray) {
        if(genre.id === showObj.genreID) {
            showGenre = genre
        }
    }
    return showGenre
}


export const tvShowHTML = () => {
    let showHTML = "<ul>"
    for (const show of shows) {
        const showStar = findActorMatch(show, actors)
        const showGenre = findGenreMatch(show, genres)
        showHTML += `<li>${show.show_name}: ${showGenre.type} starring ${showStar.name}</li>`
    }
    showHTML += "</ul>"
    return showHTML
}

