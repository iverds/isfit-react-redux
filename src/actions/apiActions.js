import * as Api from "api";

export function getAll() {
    return dispatch => {
        Api.get().then(result => {
            dispatch({
                type: "...",
            })
        })
    };
}

export function create(title) {
    return dispatch => {
        Api.create(title).then(result => {
            dispatch({
                type: "...",
            })
        })
    };
}