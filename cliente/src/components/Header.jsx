import styles from '../styles/Header.module.css';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className={styles.alignHeader}>
                <div className={styles.topBar}>
                    <div className={styles.imgZattini}>
                        <img className={styles.freteImg} src="https://static.netshoes.com.br/vue-components/6.58.0/netshoesbr/images/b6b347c335631107887e6d8a76a1ad39.svg" alt="Frete Grátis"/>
                    </div>
                </div>
                <nav className={styles.nav}>
                    <img className={styles.imgLogo} src="https://static.netshoes.com.br/vue-components/6.58.0/netshoesbr/images/7ba374555872e98c911690fa95eae162.svg" alt="Logo Netshoes"/>
                    <ul className={styles.listas}>
                    <li className={styles.liCss}>
                            <Link to="/registro"><LoginOutlinedIcon/> Login</Link>
                        </li>
                        <li className={styles.liCss}>
                            <Link to="/admin"><AdminPanelSettingsOutlinedIcon/> Gerenciamento</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <img className={styles.promoImg} src="https://static.netshoes.com.br/bnn/l_netshoes/2024-08-16/8004_1920x50.png" alt="Promoção"/>
        </>
    );
}
