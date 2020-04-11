import axios from "axios";
import { call, put, takeEvery } from 'redux-saga/effects';

export function* watchUpdateBook() {
    yield takeEvery('UPDATE_BOOK', updateBookAsync);
}

function updateBook(id, data) {
    console.log("data:" + data.newTitle);
    console.log(id);
    console.log(data);
    return axios.put(`https://spring-boot-mysql-server-part0.herokuapp.com/api/books/${id}`,
        {
        title: data.title,
        author: data.author,
        description: data.description,
        published: data.published
        })
        // .then(res => res.json())
}

export function* updateBookAsync(action) {
    try {
        console.log(action);
        const data = yield call(updateBook, action.id, action.payload);
        const book = data.data;
        console.log("BOOK" + book.newTitle);
        yield put({ type: 'UPDATE', id: book.id, data: book });
    } catch (error) {
        return console.log("Error! Can't edit the book.");
    }
}
