import listaProdutosStyles from '../styles/ListaProdutos.module.css';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

export default function ListaProdutos({ produtos, adicionarItemCarrinho }) {
  return (
    <div className={listaProdutosStyles.displayProdutos}>
      {produtos.map(produto => (
        <div key={produto.id} className={listaProdutosStyles.produtoItem}>
          <h2 className={listaProdutosStyles.produtoNome}>{produto.nomeProduto}</h2>
          <img className={listaProdutosStyles.produtoImagem} src={produto.imagem} alt={produto.nome} />
          <p className={listaProdutosStyles.produtoPreco}>Preço: R${produto.preco}</p>
          <p className={listaProdutosStyles.produtoDetalhes}><span>Marca:</span>{produto.marca} <span>Tipo:</span>{produto.tipo}</p>
          <button className={listaProdutosStyles.botaoCarrinho} onClick={() => adicionarItemCarrinho(produto)}><AddShoppingCartOutlinedIcon/></button>
          <div className={listaProdutosStyles.botaoContainer}>
          <a href='/admin'><button className={listaProdutosStyles.botaoEditar}>Editar</button></a>
          </div>
        </div>
      ))}
    </div>
  );
}