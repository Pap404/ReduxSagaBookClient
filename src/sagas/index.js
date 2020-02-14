import { all } from 'redux-saga/effects'
import {watchFetchBook} from "./get";
import {watchCreateNewBook} from "./create";
import {watchDeleteBook} from "./delete";
import {watchUpdateBook} from "./edit";

export default function* rootSaga() {
    yield all([
        watchFetchBook(),
        watchCreateNewBook(),
        watchDeleteBook(),
        watchUpdateBook()
    ])
}