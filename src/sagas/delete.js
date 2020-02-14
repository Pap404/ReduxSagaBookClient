import { call, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";

export function* watchDeleteBook() {
    yield takeEvery('REMOVE_BOOK', deleteBookAsync);
}

function deleteBook(id) {
    return axios.delete(`https://spring-boot-mysql-server-part0.herokuapp.com/api/books/${id}`)
        // .then(res => res.json())
}

export function* deleteBookAsync(action) {
    try {
        const data = yield call(deleteBook, action.id);
        yield put({ type: 'DELETE_BOOK', payload: action.id });
    } catch (error) {
        return console.log("Error! Can't delete the book");
    }
}