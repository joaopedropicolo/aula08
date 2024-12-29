import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import styles from "../styles/Alterar.module.css";
import { Link } from 'react-router-dom';

export default function Alterar() {

    const { id } = useParams();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    useEffect(() => {
      const buscarUsuario = async () => {
        try {
          const resposta = await fetch(`http://localhost:3000/usuarios/${id}`);
          const dados = await resposta.json();
          setNome(dados.nome);
          setEmail(dados.email);
        } catch {
          alert("Ocorreu um erro na API!");
        }
      };
      buscarUsuario();
    }, [id]);

    const editarUsuario = async (event) => {
      event.preventDefault();
      try {
        await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nome, email })
        });
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
        });
        Toast.fire({
          icon: "success",
          title: "Usuário Salvo!"
        });
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

    return(
      <div className={styles.main}>
        <img className={styles.img} src='https://i.pinimg.com/originals/43/22/66/4322663d45130136e56a8ecfafc0f6fd.png'></img>
      <h1>Editar Usuário ID: {id}</h1>
      <form onSubmit={editarUsuario}>
        <p>Nome:</p>
        <input type="text" value={nome} onChange={(event) => setNome(event.target.value)}/>
        <p>Email:</p>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
        <button type="submit">Salvar Alterações</button>
        <br></br>
        <Link to={'/admin'}>Voltar</Link>
      </form>
    </div>
    )
}