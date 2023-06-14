/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { Field, ErrorMessage } from 'formik';

export default function Input({ name, type, placeholder }) {
    /* const [value, setValue] = useState('');
    const input = <Field value={value} onChange={e => setValue(e.target.value)} type={type} placeholder={placeholder}/>;
    return [value, input]; */
    return (
        <>
            <Field name={name} type={type} placeholder={placeholder} />
            <ErrorMessage name={name} component='div' />
        </>
    );
}