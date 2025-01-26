import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import styles from "../styles/Alterar.module.css";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Alterar() {
  const { id } = useParams();
  const [nomeProduto, setNomeProduto] = useState("");
  const [marca, setMarca] = useState("");
  const [imagem, setImagem] = useState("");
  const [tipo, setTipo] = useState("");
  const [preco, setPreco] = useState("");

  useEffect(() => {
    document.title = `Alterar Produto ${id}`;
    const buscarProduto = async () => {
      try {
        const resposta = await fetch(`http://localhost:3000/produtos/${id}`);
        const dados = await resposta.json();
        setNomeProduto(dados.nomeProduto);
        setMarca(dados.marca);
        setImagem(dados.imagem);
        setTipo(dados.tipo);
        setPreco(dados.preco);
      } catch {
        alert("Ocorreu um erro na API!");
      }
    };
    buscarProduto();
  }, [id]);

  const editarProduto = async (event) => {
    event.preventDefault();
    try {
      const resposta = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nomeProduto,
          marca,
          imagem,
          tipo,
          preco
        })
      });
      if (resposta.ok) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Produto Salvo!"
        });
      } else {
        throw new Error("Erro na atualização do produto");
      }
    } catch {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
      });
      Toast.fire({
        icon: "error",
        title: "ERRO"
      });
      console.log("Erro: informações não editadas");
    }
  };

  return (
    <div className={styles.main}>
      <img className={styles.img} src='https://i.pinimg.com/originals/43/22/66/4322663d45130136e56a8ecfafc0f6fd.png' alt="Imagem de exemplo" />
      <h1>Editar Produto ID: {id}</h1>
      <form onSubmit={editarProduto}>
        <p>Nome Produto:</p>
        <input type="text" value={nomeProduto} onChange={(event) => setNomeProduto(event.target.value)}/>
        <p>Marca:</p>
        <input value={marca} onChange={(event) => setMarca(event.target.value)} />
        <p>Imagem:</p>
        <input value={imagem} onChange={(event) => setImagem(event.target.value)} />
        <p>Tipo:</p>
        <input value={tipo} onChange={(event) => setTipo(event.target.value)} />
        <p>Preço:</p>
        <input value={preco} onChange={(event) => setPreco(event.target.value)} />
        <button type="submit">Salvar Alterações</button>
        <br />
        <Link to={'/admin'}>Voltar</Link>
      </form>
    </div>
  );
}