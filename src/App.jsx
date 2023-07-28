import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    console.log("holaaa", { enabled });
  }, [enabled]);
  return (
    <>
      <h1>hola fer</h1>
      <button onClick={() => setEnabled(!enabled)}>
        {enabled ? "Desactivar" : "Activar"} seguidor de mouse
      </button>
    </>
  );
}

export default App;
