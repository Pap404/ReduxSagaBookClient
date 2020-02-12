import { all } from 'redux-saga/effects'
import {watchFetchBook} from "./get";
import {watchCreateNewBook} from "./create";

export default function* rootSaga() {
    yield all([
        watchFetchBook(),
        watchCreateNewBook()
    ])
}