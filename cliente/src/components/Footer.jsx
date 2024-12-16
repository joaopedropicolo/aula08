import footerStyles from '../styles/Footer.module.css';

export default function Footer({ Creditos }) {
    return (
        <footer className={footerStyles.footer}>
            © 2024 Feito Por {Creditos}. Todos os direitos reservados.
        </footer>
    );
}
