import { Form } from 'formik';
import Input from './Input';
import Buttons from './Button';

export default function Forms() { 

    return <>
        <Form>
          <div className="inputs-form">
            <Input name="email" type="email" placeholder="Correo electrónico" />
            <Input name="password" type="password" placeholder="Contraseña" />
          </div>

          <Buttons text="Ingresar" id='btn-login'/>

        </Form>
    </>
}