import { Button } from '@mui/material';
import { Cancel } from "@mui/icons-material";
import styles from '../styles/TabelaUsuarios.module.css';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function TabelaUsuarios({ ExportarPDF, Deletar, usuarios, showTable }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th><BadgeOutlinedIcon/> ID Usuário</th>
            <th><PeopleOutlineOutlinedIcon/> Nome Usuário</th>
            <th><EmailOutlinedIcon/> E-mail Usuário</th>
            <th>
              <Link to={'/registro'}><Button variant="outlined" onClick={showTable} className={styles.exibirButton}><PersonAddOutlinedIcon/>Adicionar</Button></Link>
              <Link to={'http://localhost:3000/usuarios'}><Button variant="outlined" onClick={showTable} className={styles.exibirButton}><VisibilityIcon/>Exibir</Button></Link>
              <Button variant="outlined" onClick={ExportarPDF} className={styles.buttonExport}><PictureAsPdfIcon/>Exportar PDF</Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>
                <button onClick={() => Deletar(usuario.id)} className={styles.deleteButton}><Cancel/></button>
                <Link to={'/alterar/' + usuario.id} ><button className={styles.deleteButton}><EditIcon/></button></Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}