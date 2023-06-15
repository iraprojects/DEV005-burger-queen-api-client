import { useState } from 'react';

function LoginLogic() {
    const [redirectTo, setRedirectTo] = useState(false);
    const [userRole, setUserRole] = useState('');

    const handleSubmit = async (values, { resetForm }) => {
        const { email, password } = values;

        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setUserRole(data.user.role);
                resetForm();
                setRedirectTo(true);
            } else {
                if (response.status === 400) {
                    console.error('Error: Se requiere correo y contraseña');
                } else if (response.status === 404) {
                    console.error('Error: Credenciales incorrectas');
                } else {
                    console.error('Error en la solicitud');
                }
            }
        } catch (error) {
            console.error('Error: No se pudo conectar al servidor');
        }
    };

    return { redirectTo, userRole, handleSubmit };
}

export default LoginLogic;