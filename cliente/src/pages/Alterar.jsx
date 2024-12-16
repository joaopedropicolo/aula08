import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function Alterar() {

    const { id, nome, email } = useParams();
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
      const buscarUsuario = async () => {
        try {
          const resposta = await fetch("http://localhost:3000/usuarios");
          const dados = await resposta.json();
          setUsuarios(dados);
        } catch {
          alert("Ocorreu um erro na API!");
        }
      };
      buscarUsuario();
    }, [usuarios]);

    const Editar = async(id, nome, email) =>{
        try{
        await fetch('http://localhost:3000/usuarios/' + id, nome, email,{
          method: 'PUT'
        });
        } catch{
          console.log('Erro, informações não editadas')
        }
      }

    return(
        <h1>ID: {id} Nome: {nome} Email: {email}</h1>
    )
}