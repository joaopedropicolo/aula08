import { useState } from 'react';
import styles from '../styles/Register.module.css';
import { Button } from '@mui/material';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';

export default function Registrar() {
  document.title = 'Registrar Usuário';
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('')

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const Registrar = async (event) => {
    event.preventDefault();
    console.log('Registrando Cliente. . .');
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "info",
      title: "Registrando Usuário..."
    });
    await delay(1800);

    if (nome == "" || email == "" || senha == "") {
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
          nome: nome,
          email: email,
          senha: senha
        })
      });
      console.log('Cliente registrado com sucesso!');
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1800,
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
      <img className={styles.img} src='https://i.pinimg.com/originals/43/22/66/4322663d45130136e56a8ecfafc0f6fd.png'></img>
    <h1>Registre-se:</h1>
    <form action="" onSubmit={Registrar}>
  <p><PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon> Nome:</p>
  <input placeholder="Insira seu nome" type="name" value={nome} onChange={(event) => setNome(event.target.value)}/>
  <p><EmailOutlinedIcon></EmailOutlinedIcon> Email:</p>
  <input placeholder="Insira seu e-mail"  value={email} onChange={(event) => setEmail(event.target.value)} />
  <p><VpnKeyOutlinedIcon></VpnKeyOutlinedIcon> Senha:</p>
  <input placeholder="Insira sua senha" type='password' value={senha} onChange={(event) => setSenha(event.target.value)} />
</form>
<Button variant="contained" color="success" onClick={Registrar}>Registrar</Button>
<a href="/admin" className={styles.pButton}>
  Verificar Banco de Dados
</a>
</main>
  );
}