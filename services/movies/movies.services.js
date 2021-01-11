import {AUTH_DATA, MOVIES_URI} from "../../config/config";

export const fetchMoviesAsync = (url, onSuccess, onError) => {
    fetch(MOVIES_URI, {
        method: 'get',
        headers: new Headers({
            'Authorization': AUTH_DATA,
            'Content-Type': 'application/json'
        }),
    }).then(async (data) => {
        const body = await data.json();
        onSuccess(body);
    }).catch((ex) => {
        onError(ex.message);
    });
}
