import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carrinho from '../components/Carrinho';
import ListaProdutos from '../components/ListaProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import promosAlignStyles from '../styles/PromosAlign.module.css';
import homeStyles from '../styles/Home.module.css';
import carouselStyles from '../styles/Carousel.module.css';
import listaProdutosStyles from '../styles/ListaProdutos.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

export default function Produtos(){
    const [listaObjetos, setListaObjetos] = useState([
        {
            id: 1,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 167
        },
        {
            id: 2,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 210
        },
        {
            id: 3,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 600
        },
        {
            id: 4,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 120,
        },
        {
            id: 5,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 200
        },
        {
            id: 6,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 250
        },
        {
            id: 7,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 900
        },
        {
            id: 8,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 580
        },
        {
            id: 9,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 200
        },
        {
            id: 10,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 340
        },
        {
            id: 11,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 230
        },
        {
            id: 12,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 400
        },
        {
            id: 13,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 500
        },
        {
            id: 14,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 200
        },
        {
            id: 15,
            nome: "Tênis Masculino Asics Gel-Thunderlight - Preto+Laranja",
            image: "https://static.netshoes.com.br/produtos/tenis-puma-skyrocket-lite-unissex/58/PI3-1812-058/PI3-1812-058_detalhe1.jpg",
            tipo: 'Masculino',
            categoria: ['Masculino, Tênis'],
            preco: 300
        }
    ]);

const [carrinho, setCarrinho] = useState([]);
    const adicionarItemCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
      };

      const remover = (id) => {
        let remover = false;
        const listaAux = carrinho.filter((produto) => {
          if (remover === false) {
            if (produto.id !== id) {
              return true;
            } else {
              remover = true;
              return false;
            }
          } else {
            return true;
          }
        });
        setCarrinho(listaAux);
      };

      const orderAZ = () => {
        const listaOrdenada = [listaObjetos].sort((a, b) => a.title.localCompare(b.title));
        setListaObjetos(listaOrdenada);
      }

    return(
        <>
            <Header/>
            <div className={carouselStyles.centerCarousel}>
                <Carousel infiniteLoop useKeyboardArrows autoPlay showArrows={true} showStatus={false} showThumbs={false} dynamicHeight>
                    <div className="img-carousel">
                        <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2024/06/novo-posicionamento-logomarca-e-slogan-da-netshoes.png?fit=1050%2C450&ssl=1" />
                    </div>
                    <div className="img-carousel">
                        <img src="https://i0.wp.com/prdnetshoes.wpcomstaging.com/wp-content/uploads/2021/02/aniversario21_netshoes_20210211.jpeg?fit=820%2C312&ssl=1" />
                    </div>
                    <div className="img-carousel">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3b60b035762415.5702ff8b7f02f.jpg" />
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
                <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/>DESTAQUES:</h1>
                    <div className={ListaProdutos.displayProdutos}>
                    <ListaProdutos produtos={listaObjetos.sort().slice(0, 3)} adicionarItemCarrinho={adicionarItemCarrinho}/>
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
                <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/>MAIS VISTOS:</h1>
                <button onClick={() => orderAZ()}>
                    A - Z
                </button>
                    <ListaProdutos produtos={listaObjetos.sort()} adicionarItemCarrinho={adicionarItemCarrinho}/>
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
                <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/>CLIENTES TAMBÉM COMPRAM:</h1>
                    <div className={listaProdutosStyles.displayProdutos}>
                    <ListaProdutos produtos={listaObjetos.sort().slice(-6)} adicionarItemCarrinho={adicionarItemCarrinho}/>
                </div>
            </div>

            <h1 className={homeStyles.titleProdutos}><ShoppingCartOutlinedIcon/>CARRINHO</h1>
            <Carrinho carrinho={carrinho} remover={remover}/>

            <br/><br/>
            <Footer Creditos={"João Pedro Fernandes Picolo"} />
        </>
    )
}