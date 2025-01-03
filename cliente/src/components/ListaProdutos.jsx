import listaProdutosStyles from '../styles/ListaProdutos.module.css';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function ListaProdutos({ produtos, adicionarItemCarrinho }) {
  return (
    <div className={listaProdutosStyles.displayProdutos}>
      {produtos.map(produto => (
        <div key={produto.id} className={listaProdutosStyles.produtoItem}>
          <h2 className={listaProdutosStyles.produtoNome}>{produto.nome}</h2>
          <img className={listaProdutosStyles.produtoImagem} src={produto.image} alt={produto.nome} />
          <p className={listaProdutosStyles.produtoPreco}>Preço: R${produto.preco}</p>
          <button className={listaProdutosStyles.botaoCarrinho} onClick={() => adicionarItemCarrinho(produto)}><AddShoppingCartOutlinedIcon/></button>
        </div>
      ))}
    </div>
  );
}