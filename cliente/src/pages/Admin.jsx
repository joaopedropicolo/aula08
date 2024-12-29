import { useEffect, useState } from "react";
import { jsPDF } from "jspdf"
import "jspdf-autotable"
import TabelaUsuarios from "../components/TabelaUsuarios";
import Loading from "../components/Loading";
import TabelaProdutos from "../components/TabelaProdutos";

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

  const Deletar = async (id) => {
    try {
      const result = await Swal.fire({
        title: `Excluir o usuário ${id}?`,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: "Excluir",
        cancelButtonText: "Cancelar"
      });
      if (result.isConfirmed) {
        await fetch(`http://localhost:3000/usuarios/${id}`, {
          method: 'DELETE'
        });
        Swal.fire("Usuário excluído com sucesso!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Ação cancelada", "", "info");
      }
    } catch {
      console.log('Erro, usuário não deletado');
    }
  };

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
    doc.text('LISTA DE USUÁRIOS REGISTRADOS NETSHOES', 10, 10);
    doc.autoTable({
      head: [["ID", "Nome", "E-mail"]],
      body: tabelaDados
    })
    doc.text(`TOTAL DE USUÁRIOS: ${usuarios.length}`, 10, doc.lastAutoTable.finalY + 10)
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

  if(usuarios.length === 0){
    return(
    <>
    <TabelaUsuarios usuarios={usuarios} ExportarPDF={ExportarPDF} Deletar={Deletar} />
    <Loading Mensagem={'Lista de usuários vazia'}/> 
    </>
    )}

  return (
    <>
      <TabelaUsuarios usuarios={usuarios} ExportarPDF={ExportarPDF} Deletar={Deletar} />
    </>
  );
}