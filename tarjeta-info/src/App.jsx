import React from "react";
import TarjetaInfo from "./TarjetaInfo";
import "./App.css";

function App() {
  return (
    <div>
      <TarjetaInfo
        titulo="Tel aviv"
        descripcion="conoce unos de los lugares mas lindos de israel "
        imagen="https://static.timesofisrael.com/www/uploads/2020/02/Untitled-4-6.jpg"
        enlace="https://www.disfrutatelaviv.com/"
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", 
    backgroundColor: "#f4f4f9", // Fondo claro
  },
};

export default App;
