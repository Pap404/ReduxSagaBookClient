import {createBook} from "../actions";

const submit = (values) => {
    console.log('submitting form', values);
    createBook(values);
}

export default submit;