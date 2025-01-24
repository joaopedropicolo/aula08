import { Button } from '@mui/material';
import { Cancel } from "@mui/icons-material";
import styles from '../styles/TabelaUsuarios.module.css';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';

export default function TabelaProdutos({ ExportarPDF, Deletar, produtos, showTable }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID Produto</th>
            <th>Nome Produto</th>
            <th>Marca Produto</th>
            <th>Tipo Produto</th>
            <th>Preço Produto</th>
            <th>
            <Link to={'/registroProduto'}><Button variant="outlined" onClick={showTable} className={styles.exibirButton}><AddBusinessOutlinedIcon/>Adicionar</Button></Link>
              <Link to="http://localhost:3000/produtos">
                <Button variant="outlined" onClick={showTable} className={styles.exibirButton}>
                  <VisibilityIcon /> Exibir
                </Button>
              </Link>
              <Button variant="outlined" onClick={ExportarPDF} className={styles.buttonExport}><PictureAsPdfIcon /> Exportar PDF
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((objeto) => (
            <tr key={objeto.id}>
              <td>{objeto.id}</td>
              <td>{objeto.nomeProduto}</td>
              <td>{objeto.marca}</td>
              <td>{objeto.tipo}</td>
              <td>R$ {objeto.preco}</td>
              <td>
                <button onClick={() => Deletar(objeto.id)} className={styles.deleteButton}>
                  <Cancel />
                </button>
                <Link to={`/alterarProduto/${objeto.id}`}><button className={styles.deleteButton}>
                    <EditIcon />
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}