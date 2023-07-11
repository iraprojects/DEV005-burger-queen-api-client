import "../styles/admin.css";
import { Link } from "react-router-dom";
import Top from "../Components/Top";
import Footer from "../Components/Footer";
import logoAdmin from "../assets/logo-admin.png";
import Buttons from "../Components/Button";
import AdminItem from "../Components/AdminItem";
import ApiAdminProducts from "../Utilities/ApiAdminProducts";

export default function AdminProducts() {

  return (
    <>
      <Top logoUser={logoAdmin} />
      <section className="container-body-admin">
        <div className="container-btn-filter">
          <Buttons id="btn-admin-filter" text="Desayuno" />
          <Buttons id="btn-admin-filter" text="Almuerzo" />
        </div>
        <article className="container-item-admin">
          <div className="admin-titles" id="titles-product">
            <h2 className="id-h2-product">Producto</h2>
            <h2 className="id-h2-product">Precio</h2>
          </div>

          <ApiAdminProducts />

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