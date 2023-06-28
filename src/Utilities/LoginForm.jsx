import { Formik } from 'formik';
import * as Yup from 'yup';
// import Input from '../Components/Input';
// import Buttons from '../Components/Button';
import Forms from '../Components/Forms';

function LoginForm({ onSubmit }) {
    const validationSchema = Yup.object().shape({
        email: Yup.string().required('Correo electrónico requerido'),
        password: Yup.string().required('Contraseña requerida'),
    });

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Forms />

        </Formik>
    );
}

export default LoginForm;

