import "./Header.css"
import { Link } from "react-router-dom";

const Header = () => {
return (
 <header>
 <div className="logo">
        <img src="https://img.freepik.com/vector-premium/logotipo-auriculares-ecualizador-musical-transmision-musica-icono-auriculares_742418-388.jpg" alt="foto de logo" />
    </div>
    <nav>
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/products">productos</Link>
            </li>
            <li>
                <Link to="/login">login</Link>
            </li>
        </ul>
    </nav>
    </header>
)
}

export{Header}
