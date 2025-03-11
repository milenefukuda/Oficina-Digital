import { useState } from "react";
import "./App.css";


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [cv, setCv] = useState("");
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("http://localhost:5173/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, area, linkedin, cv }),
    });
    alert("Cadastro feito com sucesso!");
  };

  return (
    <div className="container">
    <h1>Cadastre-se</h1>
      <form onSubmit={handleSubmit} className="formulario">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Área de Interesse"
          value={area}
          onChange={(e) => setArea(e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <input
          type="text"
          placeholder="Link do Portfólio/Currículo"
          value={cv}
          onChange={(e) => setCv(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
