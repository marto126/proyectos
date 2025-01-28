import { Layout } from "../../Components/Layout/Layout"
import "./Home.css"

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <h1>Bienvenido a nuestra tienda</h1>
        <p>Encuentra los mejores auriculares al mejor precio. Calidad y diseño para todos los estilos de vida.</p>
      </div>
    </Layout>
  )
}

export { Home }