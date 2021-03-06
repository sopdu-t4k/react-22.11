import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');

export const load = (id) => (dispatch) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.json())
        .then((comments) => {
            dispatch(loadCompleted(comments));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
}
