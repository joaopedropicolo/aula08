import { useEffect, useState } from "react";
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import TabelaUsuarios from "../components/TabelaUsuarios";

export default function Home() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch("http://localhost:3000/usuarios");
        const dados = await resposta.json();
        setUsuarios(dados);
      } catch {
        alert("Ocorreu um erro no app!");
      }
    };
    buscarUsuario();
  }, [usuarios]);

  const Deletar = async(id) =>{
    try{
    await fetch('http://localhost:3000/usuarios/' + id,{
      method: 'DELETE'
    });
    } catch{
      console.log('Erro, usuário não deletado')
    }
  }

  const ExportarPDF = () =>{
    const doc = new jsPDF();
    const tabelaDados = usuarios.map((usuario) => [
      usuario.id,
      usuario.nome,
      usuario.email
    ]);
    doc.text('Lista de usuários registrados', 10, 10);
    doc.autoTable({
      head: [["ID", "Nome", "E-mail"]],
      body: tabelaDados
    })
    doc.save("registrados.pdf")
  }
  
  return (
    <TabelaUsuarios usuarios={usuarios} ExportarPDF={ExportarPDF} Deletar={Deletar} />
  );
}