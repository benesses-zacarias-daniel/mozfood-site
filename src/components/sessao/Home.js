import Pedido from "../pedido/Pedido";
import Favoritos from "../favoritos/Favoritos";
import Hero from "../hero/Hero";
// import HeroHome from "../heros/HeroHome";
import Passos from "../pratos/Passos";
import style from "./Home.module.css";
import Phone from "../assets/whatsApp.svg";
import ImgHero from "../assets/img.png";
import colherGarfo from "../assets/comer.svg";
import carrinho from "../assets/carrinho.svg";
import entrega from "../assets/del.svg";

const Home = () => {
    const PassosEntregas = [
        {
            "id": 1,
            "passo": "Escolha",
            "desc": "Explore o nosso menu variado e monte o seu pedido perfeito.",
            "alt": "Ícone de colher e garfo cruzados",
            "src": colherGarfo
        }, {
            "id": 2,
            "passo": "Peça",
            "desc": "Conclua o seu pedido e confirme os detalhes da entrega.",
            "alt": "Ícone de carrinho de super mercado",
            "src": carrinho
        }, {
            "id": 3,
            "passo": "Receba",
            "desc": "Relaxe e espere. Entregamos a sua comida fresca e quente à sua porta.",
            "alt": "Ícone de carro de entrega",
            "src": entrega
        }];

    return (
        <div className={style.home}>
            {/* <HeroHome /> */}
            <Hero alt={"Imagem da sessão de hero da home"} src={ImgHero} mostrarExplorar={true} imagemFundo={false} mens={"Experimente a essência de Moçambique no conforto da sua casa. Entrega rápida, comida quente e os melhores e os melhores restaurantes da cidade."} titulo={"Sabor à sua"} tituloFoco={" Porta."} />
            <Favoritos />
            <Passos titulo={"O seu prato em 3 passos"} minInfo={""} dados={PassosEntregas} />
            <Pedido titulo_pedido={"Fome de comida de verdade ?"} alt={"Ícone de smartphone"} src={Phone} desc_pedido={" Peça agora pelos nossos canais exclusivos e receba descontos especias na sua primeira entrega."} texto={"Pedir via WhatsApp"} tipo={1} estiloBtn={style.btn_fome_pedido} />
        </div>
    );
}

export default Home;