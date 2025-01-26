import { useEffect, useState } from "react";
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
import AbcOutlinedIcon from '@mui/icons-material/AbcOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { jsPDF } from "jspdf"

export default function Produtos(){
const [listaObjetos, setListaObjetos] = useState([]);
  useEffect(() => {
    document.title = 'Netshoes Produtos';
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
  }, []);

const [carrinho, setCarrinho] = useState([]);
    const adicionarItemCarrinho = (produto) => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 2010,
        timerProgressBar: true,
    });
    Toast.fire({
        icon: "success",
        title: "Produto adicionado no carrinho!"
    });
        setCarrinho([...carrinho, produto]);
      };

      const removerItem = (id) => {
        let itemRemovido = false;
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2010,
          timerProgressBar: true,
      });
      Toast.fire({
          icon: "success",
          title: "Produto removido do carrinho!"
      });
        const listaAux = carrinho.filter((produto) => {
          if (itemRemovido === false) {
            if (produto.id !== id) {
              return true;
            } else {
            itemRemovido = true;
              return false;
            }
          } else {
            return true;
          }
        });
        setCarrinho(listaAux);
      };

      const ExportarPDF = () => {
          const doc = new jsPDF();
          let PrecoTotal = carrinho.reduce((total, objeto) => total + objeto.preco, 0).toFixed(2);
          const tabelaDados = carrinho.map((objeto) => [
            objeto.id,
            objeto.nomeProduto,
            objeto.marca,
            'R$'+objeto.preco
          ]);
          doc.text('LISTA DE COMPRAS NETSHOES', 10, 10);
          doc.autoTable({
            head: [["ID", "Nome", "Marca", "Preço"]],
            body: tabelaDados
          });
          doc.text(`PRODUTOS TOTAL: ${carrinho.length} /// PREÇO TOTAL: R$${PrecoTotal}`, 10, doc.lastAutoTable.finalY + 10)
          console.log("Baixando Lista...");
          doc.save("Compra Netshoes.pdf");
      };
      
const comprar = () => {
    if (carrinho.length === 0) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1800,
            timerProgressBar: true,
        });
        Toast.fire({
            icon: "error",
            title: "Carrinho está vazio!"
        });
    } else {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
          });
          swalWithBootstrapButtons.fire({
            title: "Finalizar Compra?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sim, finalizar compra!",
            cancelButtonText: "Não, não finalizar!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deseja gerar um PDF da sua compra?",
                    showDenyButton: true,
                    showCancelButton: false,
                    confirmButtonText: "Gerar PDF",
                    denyButtonText: `Não gerar PDF`
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire("PDF salvo, obrigado pela compra!", "", "success");
                      ExportarPDF()
                      setCarrinho([]);
                    } else if (result.isDenied) {
                      Swal.fire("Ok, obrigado pela compra!", "", "success");
                      setCarrinho([]);
                    }
                  });
            } else if (
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire({
                title: "Compra Cancelada!",
                icon: "error"
              });
            }
          });
    }
};

      const orderAZ = () => {
        const listaOrdenada = [...listaObjetos].sort((a, b) => {return a.nomeProduto.localeCompare(b.nomeProduto);});
        setListaObjetos(listaOrdenada);
      };
      const orderPrecoBarato = () => {
        const listaOrdenada = [...listaObjetos].sort((a, b) => {return a.preco - b.preco});
        setListaObjetos(listaOrdenada);
      };
      const orderPrecoCaro = () => {
        const listaOrdenada = [...listaObjetos].sort((a, b) => {return b.preco - a.preco});
        setListaObjetos(listaOrdenada);
      };

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

            <br/>

            <div className={promosAlignStyles.promosAlign}>
            <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/> PRODUTOS: <AutoAwesomeOutlinedIcon/></h1>
            <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/> NA NETSHOES TAMBÉM TEM: <AutoAwesomeOutlinedIcon/></h1>
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
                <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/> MAIS VISTOS: <AutoAwesomeOutlinedIcon/></h1>
                <button onClick={() => orderAZ()}>
                    <AbcOutlinedIcon/> A a Z
                </button>
                <button onClick={() => orderPrecoBarato()}>
                    <AttachMoneyOutlinedIcon/> Barato ao mais caro
                </button>
                <button onClick={() => orderPrecoCaro()}>
                    <AttachMoneyOutlinedIcon/> Caro ao mais barato
                </button>
                    <ListaProdutos produtos={listaObjetos.sort()} adicionarItemCarrinho={adicionarItemCarrinho}/>
                </div>
            </div>

            <div className={promosAlignStyles.promosAlign2}>
                <h1 className={homeStyles.titleProdutos}><AutoAwesomeOutlinedIcon/> NAVEGUE POR MARCAS: <AutoAwesomeOutlinedIcon/></h1>
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/405_adidas.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/7286_nike.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/5274_olympikus.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-10-17/5344_lacoste.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/6877_puma.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3585_mizuno.png" />
                <img src="https://static.netshoes.com.br/bnn/l_netshoes/2023-09-21/3769_oakley.png" />
            </div>

            <h1 className={homeStyles.titleProdutos}><ShoppingCartOutlinedIcon/>CARRINHO</h1>
            <Carrinho carrinho={carrinho} remover={removerItem} comprar={comprar}/>
            
            <br/><br/>
            <Footer Creditos={"João Pedro Fernandes Picolo"} />
        </>
    )
}