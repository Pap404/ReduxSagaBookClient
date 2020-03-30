import React from 'react';

const fieldBookComponent = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>{label}</label>
        <input {...input} placeholder={label} type={type}/>
        {touched && ((error && <span>{error}</span>))}
    </div>
);

export default fieldBookComponent;