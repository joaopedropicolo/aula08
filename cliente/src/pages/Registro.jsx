import { useState } from "react";

export default function Registrar() {

  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');

  const Registrar = async (event) => {
    event.preventDefault();
    try {
      await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: Nome,
          email: Email
        })
        
      });
    } catch (error) {
      alert("Ocorreu um erro na API");
      console.error(error);
    }
  };

  return (
    <main>
    <h1>Registre-se:</h1>
    <form action="" onSubmit={Registrar}>
  <p>Nome:</p>
  <input placeholder="Insira seu nome" value={Nome} onChange={(event) => setNome(event.target.value)}/>
  <p>Email:</p>
  <input placeholder="Insira seu e-mail" value={Email} onChange={(event) => setEmail(event.target.value)} />
</form>
<button onClick={Registrar}>Enviar</button>
</main>
  );
}