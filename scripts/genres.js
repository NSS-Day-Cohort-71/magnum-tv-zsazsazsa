//import genres
import { getGenres } from "./database.js";
//set genres to a variable
const genres = getGenres()
//define a function to print the genres
export const genreHTML = () => {
    //set up base html
    let genreHTML = "<ul>"
    //loop through actors
    for (const genre of genres) {
        //set up html per actor
        genreHTML += `<li>${genre.type}</li>`    
    }
    //close html 
    genreHTML += "</ul>"
    //return html
    return genreHTML
}