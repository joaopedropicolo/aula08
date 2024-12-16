import { Button } from '@mui/material';
import { Cancel } from "@mui/icons-material";
import styles from '../styles/TabelaUsuarios.module.css';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function TabelaUsuarios({ ExportarPDF, Deletar, usuarios, showTable }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>
              <Button variant="outlined" onClick={showTable} className={styles.exibirButton}><VisibilityIcon/>Exibir</Button>
              <Button variant="outlined" onClick={ExportarPDF} className={styles.buttonExport}><PictureAsPdfIcon/>Exportar PDF</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => Deletar(usuario.id)} className={styles.deleteButton}><Cancel/></button>
                <button onClick={() => Deletar(usuario.id)} className={styles.deleteButton}><EditIcon/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
