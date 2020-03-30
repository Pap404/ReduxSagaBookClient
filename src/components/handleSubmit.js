import {createBook} from "../actions";

const submit = (values, dispatch) => {
    console.log('submitting form', values);
    createBook(values);
};

export default submit;