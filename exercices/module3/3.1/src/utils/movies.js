const films = [];

const addOneMovie = (movie) => {
    films.push(movie);
    
}

const readAllMovies = () => films;


export {addOneMovie, readAllMovies};