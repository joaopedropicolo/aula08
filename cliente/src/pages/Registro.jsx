import { useState } from 'react';
import styles from '../styles/Register.module.css';
import { Button } from '@mui/material';

export default function Registrar() {

  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const Registrar = async (event) => {
    event.preventDefault();
    console.log('Registrando Cliente. . .');
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 2500,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "info",
      title: "Registrando Usuário..."
    });
    await delay(2500);

    if (Nome == "" || Email == "") {
      Toast.fire({
        icon: "warning",
        title: "Informações não inseridas!",
      });
      return console.log('Informações não inseridas. Registro cancelado.')
    }
    try {
      await fetch('http://localhost:3000/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: Nome,
          email: Email
        })
      });
      console.log('Cliente registrado com sucesso!');
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Usuário Registrado!"
      });
    } catch (error) {
      alert("Ocorreu um erro na API");
      console.error(error);
    }
  };
  
return (
    <main className={styles.main}>
    <h1>Registre-se:</h1>
    <form action="" onSubmit={Registrar}>
  <p>Nome:</p>
  <input placeholder="Insira seu nome" value={Nome} onChange={(event) => setNome(event.target.value)}/>
  <p>Email:</p>
  <input placeholder="Insira seu e-mail" value={Email} onChange={(event) => setEmail(event.target.value)} />
</form>
<Button variant="contained" color="success" onClick={Registrar}>Enviar</Button>
<a href="/admin" className={styles.pButton}>
  Verificar Banco de Dados
</a>
</main>
  );
}