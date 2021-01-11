export const makeSelectGenres = (state) => {
    const movies = state.movies.movies;
    if (!movies) {
        return [];
    }
    let genres = [];
    movies.forEach((movie) => {
        if (movie?.genres) {
            const genresArr = Array.isArray(movie.genres) ? movie.genres : [movie.genres];
            genres = genres.concat(genresArr);
        }
    });
    return [...new Set(genres)]; //unique values
}

export const makeSelectMoviesByGenre = (state, genre) => {
    const movies = state.movies.movies;
    const filteredMovies = [];
    if (!movies) {
        return [];
    }

    movies.forEach((movie) => {
        const genres = movie.genres;
        if (genres && Array.isArray(genres) && genres.includes(genre)) {
            filteredMovies.push(movie);
        }
    });
    return filteredMovies;
}

export const makeSelectMoviesGroupedByGenre = (state) => {
    const groupedMovies = {};
    const genres = makeSelectGenres(state);
    genres.forEach((genre) => {
        groupedMovies[genre] = makeSelectMoviesByGenre(state, genre);
    });
    return groupedMovies;
}

export const makeSelectMoviesBySearchText = (state) => {
    const movies = state.movies.movies;
    const searchText = state.movies.searchText;
    const filteredMovies = [];

    if (!movies) {
        return [];
    }

    movies.forEach((movie) => {
        if (movie?.title?.toLowerCase().indexOf(searchText.toLowerCase()) > -1) {
            filteredMovies.push(movie);
        }
    });
    return {"Search results": [...new Set(filteredMovies)]};
}

export const makeSelectMovieById = (state, id) => {
    const movies = state.movies.movies;
    if (!movies) {
        return undefined;
    }

    return movies.find((movie) => movie.id === id);
}