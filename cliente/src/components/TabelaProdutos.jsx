import { Button } from '@mui/material';
import { Cancel } from "@mui/icons-material";
import styles from '../styles/TabelaUsuarios.module.css';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';

export default function TabelaProdutos({ ExportarPDF, Deletar, produtos, showTable }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>
              <Link to={'/registro'}><Button variant="outlined" onClick={showTable} className={styles.exibirButton}><VisibilityIcon/>Exibir</Button></Link>
              <Link to={'http://localhost:3000/produtos'}><Button variant="outlined" onClick={showTable} className={styles.exibirButton}><VisibilityIcon/>Exibir</Button></Link>
              <Button variant="outlined" onClick={ExportarPDF} className={styles.buttonExport}><PictureAsPdfIcon/>Exportar PDF</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((objeto) => (
            <tr key={objeto.id}>
              <td>{objeto.id}</td>
              <td>{objeto.nome}</td>
              <td>{objeto.email}</td>
              <td>
                <button onClick={() => Deletar(objeto.id)} className={styles.deleteButton}><Cancel/></button>
                <Link to={'/alterar/' + objeto.id} ><button className={styles.deleteButton}><EditIcon/></button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}