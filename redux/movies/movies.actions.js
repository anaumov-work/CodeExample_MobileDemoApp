import MoviesActionTypes from "./movies.types";
import {fetchMoviesAsync} from "../../services/movies/movies.services";

export const fetchCollectionsStart = () => ({
    type: MoviesActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: MoviesActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: MoviesActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

export const fetchCollectionsStartAsync = async (query, dispatch) => {
    dispatch(fetchCollectionsStart());
    const response = fetchMoviesAsync("", (data) => {
        dispatch(fetchCollectionsSuccess(data.movies));
    }, fetchCollectionsFailure);
};

export const updateSearchFilter = (searchText) => ({
    type: MoviesActionTypes.UPDATE_SEARCH_FILTER,
    payload: searchText,
})

export const clearSearchFilter = () => (updateSearchFilter(""));