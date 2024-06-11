const database = {
   actors : [
    { id: 1, name: 'Bryan Cranston' },
    { id: 2, name: 'Aaron Paul' },
    { id: 3, name: 'Millie Bobby Brown' },
    { id: 4, name: 'David Harbour' },
    { id: 5, name: 'Winona Ryder' },
    { id: 6, name: 'Finn Wolfhard' },
    { id: 7, name: 'Bob Odenkirk' },
    { id: 8, name: 'Jonathan Banks' },
    { id: 9, name: 'Giancarlo Esposito' },
    { id: 10, name: 'Anna Gunn' },
    { id: 11, name: 'Pedro Pascal' },
    { id: 12, name: 'Kit Harington' },
    { id: 13, name: 'Emilia Clarke' },
    { id: 14, name: 'Lena Headey' },
    { id: 15, name: 'Nikolaj Coster-Waldau' },
    { id: 16, name: 'Maisie Williams' },
    { id: 17, name: 'Sophie Turner' },
    { id: 18, name: 'Peter Dinklage' },
    { id: 19, name: 'Sean Bean' },
    { id: 20, name: 'Henry Cavill' }
  ],
   genres : [
    { id: 1, type: 'Drama' },
    { id: 2, type: 'Sci-Fi' },
    { id: 3, type: 'Thriller' },
    { id: 4, type: 'Comedy' },
    { id: 5, type: 'Action' },
    { id: 6, type: 'Adventure' },
    { id: 7, type: 'Fantasy' },
    { id: 8, type: 'Mystery' },
    { id: 9, type: 'Crime' },
    { id: 10, type: 'Horror' }
  ],
  tvShows : [
    { id: 1, show_name: 'Breaking Bad', actorID: 1, genreID: 1 },
    { id: 2, show_name: 'Stranger Things', actorID: 3, genreID: 2 },
    { id: 3, show_name: 'Better Call Saul', actorID: 7, genreID: 9 },
    { id: 4, show_name: 'The Boys', actorID: 6, genreID: 5 },
    { id: 5, show_name: 'The Mandalorian', actorID: 11, genreID: 6 },
    { id: 6, show_name: 'Ozark', actorID: 10, genreID: 1 },
    { id: 7, show_name: 'The Office', actorID: 2, genreID: 4 },
    { id: 8, show_name: 'Sherlock', actorID: 8, genreID: 8 },
    { id: 9, show_name: 'The Witcher', actorID: 20, genreID: 7 },
    { id: 10, show_name: 'Black Mirror', actorID: 5, genreID: 3 },
    { id: 11, show_name: 'Game of Thrones', actorID: 12, genreID: 7 },
    { id: 12, show_name: 'Narcos', actorID: 9, genreID: 9 },
    { id: 13, show_name: 'Mindhunter', actorID: 4, genreID: 9 },
    { id: 14, show_name: 'House of Cards', actorID: 8, genreID: 1 },
    { id: 15, show_name: 'Friends', actorID: 16, genreID: 4 },
    { id: 16, show_name: 'The Crown', actorID: 13, genreID: 1 },
    { id: 17, show_name: 'Westworld', actorID: 17, genreID: 2 },
    { id: 18, show_name: 'Peaky Blinders', actorID: 19, genreID: 9 },
    { id: 19, show_name: 'The Walking Dead', actorID: 14, genreID: 10 },
    { id: 20, show_name: 'Vikings', actorID: 15, genreID: 6 }
  ]
}

export const getActors = () => {
  return structuredClone(database.actors)
}

export const getGenres = () => {
  return structuredClone(database.genres)
}

export const getTvShows = () => {
  return structuredClone(database.tvShows)
}






