import axios from "axios";
import {call, put, takeEvery} from "redux-saga/effects";

export function* watchCreateNewBook() {
    yield takeEvery('CREATE_BOOK', createNewBookAsync);
}

function createNewBook(data) {
    console.log(data);
    return axios.post(`https://spring-boot-mysql-server-part0.herokuapp.com/api/books/create`, data)
}

export function* createNewBookAsync(action) {
    try {
        const data = yield call(createNewBook, action.payload);
        const book = data.data;
        yield put({ type: 'ADD_BOOK', payload: book });
    } catch (error) {
        return console.log("Error! Can't add new book");
    }
}