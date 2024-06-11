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
    { id: 10, name: 'Anna Gunn' }
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
    { id: 5, show_name: 'The Mandalorian', actorID: 9, genreID: 6 },
    { id: 6, show_name: 'Ozark', actorID: 10, genreID: 1 },
    { id: 7, show_name: 'The Office', actorID: 2, genreID: 4 },
    { id: 8, show_name: 'Sherlock', actorID: 8, genreID: 8 },
    { id: 9, show_name: 'The Witcher', actorID: 4, genreID: 7 },
    { id: 10, show_name: 'Black Mirror', actorID: 5, genreID: 3 }
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






