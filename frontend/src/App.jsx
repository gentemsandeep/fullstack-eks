import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("Checking...");
  const [database, setDatabase] = useState("");

  useEffect(() => {
    fetch("/api/health")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.status);
        setDatabase(data.database);
      })
      .catch(() => {
        setStatus("Backend connection failed");
        setDatabase("");
      });
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "80px auto",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Full Stack AWS Application</h1>

      <h2>React Frontend ✅</h2>

      <p>
        Backend status: <strong>{status}</strong>
      </p>

      <p>
        Database: <strong>{database}</strong>
      </p>
    </div>
  );
}

export default App;
