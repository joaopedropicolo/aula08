import React, { useState } from 'react';
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
    const [listaObjetos, setListaObjetos] = useState([
        {
            id: 1,
            nome: "Sandália crocs crocband cars lightning red - Vermelho",
            marca: "Croband",
            image: "https://static.netshoes.com.br/produtos/sandalia-crocs-crocband-cars-lightning-red/16/FDT-6343-016/FDT-6343-016_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Tênis', 'Infantil'],
            preco: 300
        },
        {
            id: 2,
            nome: "Bota Couro Bull Terrier Phoenix Masculina",
            marca: "Bull",
            image: "https://static.netshoes.com.br/produtos/bota-couro-bull-terrier-phoenix-masculina/64/A52-3685-264/A52-3685-264_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Bota'],
            preco: 500
        },
        {
            id: 3,
            nome: "Tênis Infantil Disney Stich Menina",
            marca: "Stich",
            image: "https://static.netshoes.com.br/produtos/tenis-infanil-disney-stich-menina/91/QPV-2059-791/QPV-2059-791_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Tênis', 'Infantil'],
            preco: 100
        },
        {
            id: 4,
            nome: "Tênis Nike Downshifter 13 Feminino",
            marca: "Nike",
            image: "https://static.netshoes.com.br/produtos/tenis-nike-downshifter-13-feminino/06/JD8-6467-006/JD8-6467-006_zoom1.jpg",
            tipo: 'Feminino',
            categoria: ['Feminino', 'Tênis'],
            preco: 200
        },
        {
            id: 5,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            marca: "Asics",
            image: "https://static.netshoes.com.br/produtos/tenis-under-armour-charged-first/72/39W-3305-172/39W-3305-172_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Tênis', 'Infantil'],
            preco: 600
        },
        {
            id: 6,
            nome: "Tênis Mizuno Wave Titan 2 Masculino",
            marca: "Mizuno",
            image: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2-masculino/93/2FU-6367-793/2FU-6367-793_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Tênis'],
            preco: 450
        },
        {
            id: 7,
            nome: "Sandália Crocs Croband Clog",
            marca: "Croband",
            image: "https://static.netshoes.com.br/produtos/sandalia-crocs-croband-clog/88/FDT-0203-088/FDT-0203-088_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Crocs'],
            preco: 450
        },
        {
            id: 8,
            nome: "Tênis Adidas Response Runner",
            marca: "Adidas",
            image: "https://static.netshoes.com.br/produtos/tenis-adidas-response-runner/26/FB9-3696-026/FB9-3696-026_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Tênis'],
            preco: 150
        },
        {
            id: 9,
            nome: "Tênis Mizuno Wave Titan 2 Masculino",
            marca: "Mizuno",
            image: "https://static.netshoes.com.br/produtos/tenis-mizuno-wave-titan-2-masculino/06/2FU-6367-006/2FU-6367-006_zoom1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino', 'Tênis'],
            preco: 230
        }
    ]);

    const [carrinho, setCarrinho] = useState([]);
    const adicionarItemCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
      };

      if(listaObjetos.length === 0){
        return(
            <Loading Mensagem={"Carregando . . ."}/>
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