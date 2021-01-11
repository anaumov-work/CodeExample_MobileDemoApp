import MoviesActionTypes from "./movies.types";

const INITIAL_STATE = {
    movies: null,
    isFetching: false,
    errorMessage: undefined,
    searchText: '',
};

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MoviesActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            };
        case MoviesActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                movies: action.payload
            };
        case MoviesActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            };
        case MoviesActionTypes.UPDATE_SEARCH_FILTER:
            return {...state, searchText: action.payload}
        default:
            return state;
    }
};

export default moviesReducer;
