import { Button } from '@mui/material';
import { Cancel } from "@mui/icons-material";
import styles from '../styles/TabelaUsuarios.module.css';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Link } from 'react-router-dom';
import AddBusinessOutlinedIcon from '@mui/icons-material/AddBusinessOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import TypeSpecimenOutlinedIcon from '@mui/icons-material/TypeSpecimenOutlined';
import RollerSkatingOutlinedIcon from '@mui/icons-material/RollerSkatingOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';

export default function TabelaProdutos({ ExportarPDF, Deletar, produtos, showTable }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th><BadgeOutlinedIcon/> ID Produto</th>
            <th><StoreOutlinedIcon/> Nome Produto</th>
            <th><TypeSpecimenOutlinedIcon/> Marca Produto</th>
            <th><RollerSkatingOutlinedIcon/> Tipo Produto</th>
            <th><LocalAtmOutlinedIcon/> Preço Produto</th>
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