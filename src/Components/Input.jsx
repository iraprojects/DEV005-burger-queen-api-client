/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { Field, ErrorMessage } from 'formik';

export default function Input({ name, type, placeholder }) {
    return (
        <>
            <Field name={name} type={type} placeholder={placeholder} />
            <ErrorMessage name={name} component='div' className='error-message' />
        </>
    );
}