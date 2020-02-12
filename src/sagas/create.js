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
        const newBook = yield call(createNewBook, action.payload);
        console.log(newBook);
        yield put({ type: 'ADD_BOOK', payload: newBook.data });
    } catch (error) {
        return console.log("Error! Can't add new book");
    }
}