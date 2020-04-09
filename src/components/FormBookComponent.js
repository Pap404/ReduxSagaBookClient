import React from 'react';
import {Field, reduxForm} from 'redux-form';
import fieldBookComponent from "./FieldBookComponent";
import { connect } from 'react-redux';
import {createBook} from "../actions";

const validate = values => {
    const errors = {};
    if (!values.title) {
        errors.title = 'Tittle cannot be empty'
    }
    if (!values.author) {
        errors.author = 'Please add the author'
    }
    if (values.description > 10) {
        errors.description = 'Description should have 10 or more symbols'
    }
    if (!values.published) {
        errors.published = 'Year cannot be empty'
    } else if (isNaN(Number(values.published))) {
        errors.published = 'Required numbers, ex. 2020'
    } else if (Number(values.published) < 0) {
        errors.published = 'Year cannot be less then 0'
    }
    return errors;
};

    const FormBookComponent = (props) => {

            const {handleSubmit, reset} = props;

            return (
                <form onSubmit={handleSubmit}>
                    <Field
                        name='title'
                        type='text'
                        component={fieldBookComponent}
                        label='Title'
                    />
                    <Field
                        name='author'
                        type='text'
                        component={fieldBookComponent}
                        label='Author'
                    />
                    <Field
                        name='description'
                        type='text'
                        component={fieldBookComponent}
                        label='Description'
                    />
                    <Field
                        name='published'
                        type='text'
                        component={fieldBookComponent}
                        label='Published'
                    />
                    <button type="submit" onClick={handleSubmit}>
                        Submit Form
                    </button>
                    <button type="button" onClick={reset}>Clear</button>
                </form>
            )
        };

    const mapDispatchToProps = (dispatch) => {
        return {
            createBook: dispatch(createBook)
        }
    }

export default reduxForm({
    form: "myForm",
    validate
})(
    connect(
        null,
        mapDispatchToProps
    )(FormBookComponent))


