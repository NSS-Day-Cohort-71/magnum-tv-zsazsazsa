//import actors
import { getActors } from "./database.js";
//set actors to a variable
const actors = getActors()
//define a function to print the actors
export const actorHTML = () => {
    //set up base html
    let actorHTML = "<ul>"
    //loop through actors
    for (const actor of actors) {
        //set up html per actor
        actorHTML += `<li>${actor.name}</li>`    
    }
    //close html 
    actorHTML += "</ul>"
    //return html
    return actorHTML
}
