import { call, put, takeEvery } from 'redux-saga/effects';

function fetchBook() {
    return fetch("https://spring-boot-mysql-server-part0.herokuapp.com/api/books")
        .then(res => res.json())
}

export function* watchFetchBook() {
    yield takeEvery('FETCHED_BOOK', fetchBookAsync);
}

export function* fetchBookAsync() {
    try {
        console.log("FetchAsync");
        const list = yield call(fetchBook);
        console.log(list);
        yield put({ type: 'GET_BOOK', payload: list });
    } catch (error) {
        return console.log("Error! Can't show the book list.");
    }
}

