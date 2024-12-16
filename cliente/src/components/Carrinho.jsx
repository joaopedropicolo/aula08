import carrinhoStyles from '../styles/Carrinho.module.css';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';

export default function Carrinho({ carrinho, remover }) {
    return (
        <div className={carrinhoStyles.displayProdutos}>
            {carrinho.map((produto) => (
                <div key={produto.id} className={carrinhoStyles.produtoItem}>
                    <h2 className={carrinhoStyles.produtoNome}>{produto.nome}</h2>
                    <img className={carrinhoStyles.produtoImagem} src={produto.image} alt={produto.nome} />
                    <p className={carrinhoStyles.produtoPreco}>Preço: R${produto.preco}</p>
                    <button className={carrinhoStyles.botaoCarrinho} onClick={() => remover(produto.id)}><RemoveShoppingCartOutlinedIcon/></button>
                </div>
            ))}
        </div>
    );
};