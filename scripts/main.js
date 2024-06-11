import { actorHTML } from "./actors.js";
import { genreHTML } from "./genres.js";
import { tvShowHTML } from "./shows.js"

const content = document.querySelector("#content")

const applicationHTML = `
    <h1>Magnum TV</h1>
    <article class="details">
        <section class="detail--column">
            <h2>Actors</h2>
            ${actorHTML()}
        </section>
        <section class="detail--column">
            <h2>Genres</h2>
            ${genreHTML()}
        </section>
    </article>

    <article id="tvshows">
        <h2>Tv Shows</h2>
        ${tvShowHTML()}
    </article>
`

content.innerHTML = applicationHTML
