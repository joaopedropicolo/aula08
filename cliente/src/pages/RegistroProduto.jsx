import { useState } from 'react';
import styles from '../styles/Register.module.css';
import { Button } from '@mui/material';

export default function Registrar() {
  document.title = 'Registrar Produto';
  const [nomeProduto, setNomeProduto] = useState('');
  const [marca, setMarca] = useState('');
  const [imagem, setImagem] = useState('');
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState('');

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const Registrar = async (event) => {
    event.preventDefault();
    console.log('Registrando Produto. . .');
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "info",
      title: "Registrando Produto..."
    });
    await delay(1800);

    if (nomeProduto == "" || marca == "" || imagem == "" || tipo == "" || preco == Number) {
      Toast.fire({
        icon: "warning",
        title: "Informações não inseridas!",
      });
      return console.log('Informações não inseridas. Registro cancelado.')
    }
    try {
      await fetch('http://localhost:3000/produtos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nomeProduto: nomeProduto,
          marca: marca,
          imagem: imagem,
          tipo: tipo,
          preco: preco
        })
      });
      console.log('Produto registrado com sucesso!');
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "success",
        title: "Produto Registrado!"
      });
    } catch (error) {
      alert("Ocorreu um erro na API");
      console.error(error);
    }
  };
  
return (
    <main className={styles.main}>
      <img className={styles.img} src='https://i.pinimg.com/originals/43/22/66/4322663d45130136e56a8ecfafc0f6fd.png'></img>
    <h1>Registro de Produtos:</h1>
    <form action="" onSubmit={Registrar}>
  <p>Nome:</p>
  <input placeholder="Insira o nome do produto" value={nomeProduto} onChange={(event) => setNomeProduto(event.target.value)}/>
  <p>Marca:</p>
  <input placeholder="Insira a marca do produto"  value={marca} onChange={(event) => setMarca(event.target.value)} />
  <p>Imagem:</p>
  <input placeholder="Insira o link da imagem"  value={imagem} onChange={(event) => setImagem(event.target.value)} />
  <p>Tipo:</p>
  <input placeholder="Insira o tipo do produto"  value={tipo} onChange={(event) => setTipo(event.target.value)} />
  <p>Preço:</p>
  <input placeholder="Insira o preço do produto"  type="number" value={preco} onChange={(event) => setPreco(event.target.value)} />
</form>

<Button variant="contained" color="success" onClick={Registrar}>Registrar</Button>
<a href="/admin" className={styles.pButton}>
  Verificar Banco de Dados
</a>
</main>
  );
}