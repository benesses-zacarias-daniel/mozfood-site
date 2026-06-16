import { Link } from "react-router-dom";
import Hero from "../hero/Hero";
import Img from "../img/Img";
import style from "./SobreNos.module.css";
import Fundo from "../assets/img.png";
import Button from "../buttons/Button";
import { usePagina } from "../context/Context";
import Passos from "../pratos/Passos";
import Fresco from "../assets/fresco.svg";
import Speed from "../assets/speed.svg";
import Lanche from "../assets/lanche.svg";
import HistoriaSobre from "../pedido/HistoriaSobre";

const SobreNos = () => {
    const { mudarPagina } = usePagina();
    const Valores = [
        {
            "id": 1,
            "passo": "Ingredientes Frescos",
            "desc": "Parcerias directas com produtores locais garantem que o sabor cheguee vibrante ao seu prato.",
            "alt": "Ícone de folha de árvore",
            "src": Fresco
        }, {
            "id": 2,
            "passo": "Entrega Rápida",
            "desc": "Logística inteligente e rastreamento em tempo real para que sua comida chegue sempre quente.",
            "alt": "Ícone de energia",
            "src": Speed
        }, {
            "id": 3,
            "passo": "Sabor Autêntico",
            "desc": "Receitas que respeitam as tradições, preparadas por quem realmente entende da nossa terra.",
            "alt": "Ícone de Hamburger",
            "src": Lanche
        }];

    const onClick = () => {
        mudarPagina("menu");
    }

    return (
        <div className={style.sobre}>
            <Hero mens={"Elevamos a herança culinária de Moçambique com a convivência da tecnologia moderna, entregando autenticidade à sua porta."} alt={"Imagem de fundo bla!"} src={Fundo} titulo={"Saber que Une Gerações"} imgFundo={true} mostrarExplorar={false} />
            <HistoriaSobre />
            <Passos titulo={"O Que Nos Define"} minInfo={"Nossos pilares fundamentais garantem que cada pedido seja uma experiencia de excelência"} dados={Valores} />
            <div className={style.area_acao_sobre}>
                <div className={style.sobre_img_desc}>
                    <Img alt={"Imagem de fundo bla!"} estilo={style.img_fundo} src={Fundo} />
                    <div className={style.area_desc_sobre}>
                        <div className={style.desc_mens}>
                            <h2>Pronto para provar a diferença?</h2>
                            <p>Explore os melhores sabores de Moçambique agora mesmo.</p>
                        </div>
                        <div className={style.area_btn_sobre}>
                            <Link to={"/mozfood/menu"}>
                                <Button children={"Ver Menu Completo"} estilo={style.btn_sobre_acao} onClick={() => {
                                    onClick();
                                }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SobreNos;