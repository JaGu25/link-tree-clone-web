import Button from "../../components/Button/Button";

function Test() {
  return (
    <div>
      <h1>Bienvenido a LinkTree Clone Test</h1>
      <div style={{ display: "flex", gap: "10px", margin: "20px" }}>
        <Button text="Haz clic aquí" />
        <Button text="Haz clic aquí" disabled />
        <Button text="Haz clic aquí" isLoading />
      </div>
    </div>
  );
}

export default Test;
