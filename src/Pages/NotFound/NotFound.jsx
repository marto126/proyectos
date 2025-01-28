import "./NotFound.css";
import { Layout } from "../../Components/Layout/Layout";

const NotFound = () => {
  return (
    <Layout>
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">Página no encontrada</p>
      <p className="not-found-description">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <a href="/" className="not-found-button">
        Volver al inicio
      </a>
    </div>
    </Layout>
  )
}

export {NotFound}