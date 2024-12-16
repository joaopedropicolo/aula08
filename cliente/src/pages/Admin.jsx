import { useEffect, useState } from "react";
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import TabelaUsuarios from "../components/TabelaUsuarios";
import Loading from "../components/Loading";
import ListaProdutos from "../components/ListaProdutos";

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
    if(usuarios.length == 0){
      const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true,
          });
          Toast.fire({
            icon: "error",
            title: "Lista está vazia!"
          });     
      console.log("Lista vazia, exportação cancelada.")
    } else {
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
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1800,
      timerProgressBar: true,
    });
    Toast.fire({
      icon: "success",
      title: "Baixando Lista. . ."
    });     
    console.log("Lista vazia, exportação cancelada.")
    doc.save("registrados.pdf")
  }}
  
  if(usuarios.length === 0) {
    return (
    <div>
      <TabelaUsuarios usuarios={usuarios} ExportarPDF={ExportarPDF} Deletar={Deletar} />
      <Loading Mensagem={"Lista de usuários vazia"}/>
    </div>
  )}

  return (
    <TabelaUsuarios usuarios={usuarios} ExportarPDF={ExportarPDF} Deletar={Deletar} />
  );
}