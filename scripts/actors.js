//import actors
import { getActors, getTvShows } from "./database.js";

//set actors to a variable
const actors = getActors()

//define a function to print the actors
export const actorHTML = () => {
    //set up base html
    let actorHTML = "<ul>"
    //loop through actors
    for (const actor of actors) {
        //set up html per actor
        actorHTML += `<li data-type="actor" data-id="${actor.id}" data-name="${actor.name}">${actor.name}</li>`    
    }
    //close html 
    actorHTML += "</ul>"
    //return html
    return actorHTML
}

document.addEventListener("click", (click) => {
    //what was clicked?
    const clickTarget = click.target
    //was an actor clicked? 
    if (clickTarget.dataset.type === "actor") {
    //what is the actorID? 
        const actorID = clickTarget.dataset.id
        const actorName = clickTarget.dataset.name
    //loop through shows to find matching actor
        const shows = getTvShows()
        for (const show of shows) {
            if(show.actorID === parseInt(actorID)) {
                window.alert(`${actorName} is the star of ${show.show_name}`)
            }
        }
    }
})
