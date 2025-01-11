import React from "react";
import PropTypes from "prop-types";
import "./TarjetaInfo.css";

const TarjetaInfo = ({ titulo, descripcion, imagen, enlace }) => {
  return (
    <div className="card">
      <img src={imagen} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      {enlace && (
        <a href={enlace} target="_blank" rel="noopener noreferrer">
          <button>Leer más</button>
        </a>
      )}
    </div>
  );
};

TarjetaInfo.propTypes = {
  titulo: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  enlace: PropTypes.string,
};

export default TarjetaInfo;