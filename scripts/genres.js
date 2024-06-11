//import genres
import { getGenres, getTvShows } from "./database.js";
//set genres to a variable
const genres = getGenres()
//define a function to print the genres
export const genreHTML = () => {
    //set up base html
    let genreHTML = "<ul>"
    //loop through actors
    for (const genre of genres) {
        //set up html per actor
        genreHTML += `<li data-type="genre" data-id="${genre.id}" data-name="${genre.type}">${genre.type}</li>`    
    }
    //close html 
    genreHTML += "</ul>"
    //return html
    return genreHTML
}

document.addEventListener("click", (click) => {
    const clickTarget = click.target

    if (clickTarget.dataset.type === "genre") {
        const genreID = clickTarget.dataset.id
        const genreName = clickTarget.dataset.name

        const shows = getTvShows()
        let matches = []
        for (const show of shows) {
            if (show.genreID === parseInt(genreID)) {
                matches.push(` ${show.show_name}`)
            }
        }
        window.alert(`${genreName} shows:\n
        ${matches}`)
    }
})