import { useEffect, useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ListaProdutos from '../components/ListaProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import promosAlignStyles from '../styles/PromosAlign.module.css';
import homeStyles from '../styles/Home.module.css';
import carouselStyles from '../styles/Carousel.module.css';
import listaProdutosStyles from '../styles/ListaProdutos.module.css';
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Loading from '../components/Loading';

export default function Home() {
    const [listaObjetos, setListaObjetos] = useState([]);
      useEffect(() => {
        document.title = 'Netshoes Home';
        const buscarProduto = async () => {
          try {
            const resposta = await fetch("http://localhost:3000/produtos");
            const dados = await resposta.json();
            setListaObjetos(dados);
          } catch {
            alert("Ocorreu um erro no app!");
          }
        };
        buscarProduto();
      }, [listaObjetos]);

    const [carrinho, setCarrinho] = useState([]);
    const adicionarItemCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
      };

      if(listaObjetos.length === 0){
        return(
            <Loading Mensagem={"Carregando Produtos"}/>
        )
      }

    return (
        <>
            <Header/>
            <div className={carouselStyles.centerCarousel}>
                <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showStatus={false} showThumbs={false} dynamicHeight>
                    <div className="img-carousel">
                        <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2021/02/aniversario21_netshoes_20210211.jpeg?fit=820%2C312&ssl=1" />
                    </div>
                    <div className="img-carousel">
                        <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-12-06/3282_natal_precinho_full_desk.jpg" />
                    </div>
                    <div className="img-carousel">
                        <img src="https://tm.ibxk.com.br/2024/10/11/11085545717017.jpg?ims=750x" />
                    </div>
                </Carousel>
            </div>

            <div className={promosAlignStyles.promosAlignTop}>
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/527_01.jpg" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1686_02.jpg" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/1596_03.jpg" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-07-16/9101_04.jpg" />
            </div>

            <div className={homeStyles.centerListaProdutos}>
                <h1 className={homeStyles.titleProdutos}><HomeOutlinedIcon/>HOME</h1>
                    <div className={ListaProdutos.displayProdutos}>
                        <a href='/produtos'>
                    <ListaProdutos produtos={listaObjetos.sort().slice(0, 3)}/>
                        </a>
                </div>
            </div>

            <br/>

            <div className={promosAlignStyles.promosAlign}>
            <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/>NA NETSHOES TAMBÉM TEM:</h1>
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/2195_1_1_tnis.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/4786_1_2_chuteiras.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/9042_1_3_camisastimes.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/777_1_4_suplementos.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/3_1_5_camisetas.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/3583_1_6_jaquetas.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2024-04-19/9371_1_7_mochilas.png" />
            </div>

            <div className={homeStyles.centerListaProdutos}>
                <div className={listaProdutosStyles.displayProdutos}>
                <h1 className={homeStyles.titleProdutos}><RemoveRedEyeOutlinedIcon/>MAIS VISTOS:</h1>
                <a href='/produtos'>
                    <ListaProdutos produtos={listaObjetos.sort().slice(-3)}/>
                </a>
                </div>
            </div>

            <div className={promosAlignStyles.promosAlign2}>
                <h1 className={homeStyles.titleProdutos}>NAVEGUE POR MARCAS:</h1>
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/405_adidas.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/7286_nike.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/5274_olympikus.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-10-17/5344_lacoste.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/6877_puma.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3585_mizuno.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3769_oakley.png" />
            </div>

            <div className={homeStyles.centerListaProdutos}>
                <h1 className={homeStyles.titleProdutos}><SellOutlinedIcon/>VEJA TAMBÉM</h1>
                    <div className={listaProdutosStyles.displayProdutos}>
                    <a href='/produtos'>
                    <ListaProdutos produtos={listaObjetos.sort().slice(-6)}/>
                    </a>
                </div>
            </div>

            <br/><br/>
            <Footer Creditos={"João Pedro Fernandes Picolo"} />
        </>
    );
}