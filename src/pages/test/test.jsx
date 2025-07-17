import React from "react";
import Button from "../../components/button/button";

function Test() {
  return (
    <div>
      <h1>Bienvenido a LinkTree Clone Test</h1>
      <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
        <Button text="Haz clic aquí" />
        <Button text="Desactivado" disabled />
        <Button text="Cargando" isLoading />
      </div>
    </div>
  );
}

export default Test;
