import "../styles/admin.css";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import logoAdmin from "../assets/logo-admin.png";
import Buttons from "../Components/Button";
import AdminItem from "../Components/AdminItem";

export default function AdminWorkers() {

  const workerData = {
    name: 'Soila Cerda del Campo',
    email: 'cerdita@gmail.com',
    contactNumber: '123456789',
    role: 'mesera',
  };

    return (
      <>
        <Top logoUser={logoAdmin} />
        <section className="container-body-admin">
        <div className="container-btn-filter">
        <Buttons id="btn-admin-filter" text="Meseros"/>
        <Buttons id="btn-admin-filter" text="Cocineros"/>
        <Buttons id="btn-admin-filter" text="Administradores"/>
        </div>
        <article className="container-item-admin">
      <div className="admin-titles">
      <h2>Nombre:</h2>
      <h2>Correo:</h2>
      <h2>Número de contacto:</h2>
      <h2>Cargo:</h2>
      </div>

      <AdminItem worker={workerData} />
      </article>
      </section>
        <Footer
          text={
            <>
            <Link to="/adminWorkers">
              <Buttons id="btn-admin" text="Trabajadores" />
              </Link>
              <Link to="/adminProducts">
                <Buttons id="btn-admin" text="Productos" />
              </Link>
            </>
          }
        />
      </>
    );
  }