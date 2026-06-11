import { Link } from "react-router-dom";
import Pratos from "../pratos/Pratos";
import style from "./Favoritos.module.css"
import Seta from "../assets/seta.svg";
import Button from "../buttons/Button";
import { usePagina } from "../context/Context";
import Img from "../img/Img";
import PratosDados from "../data/Pratos";

const Favoritos = () => {
    const { mudarPagina } = usePagina();

    return (
        <div className={style.area_favoritos}>
            <div className={style.titulo_e_min_desc}>
                <h2>Favoritos da Semana</h2>
                <div className={style.actao_menu_mais}>
                    <p className={style.min_desc_menu}>Os pratos mais pedidos dos últimos 7 dias.</p>

                    <div className={style.area_btn_ver}>
                        <Link to={"/mozfood/menu"}>
                            <Button estilo={style.btn_menu_ver} onClick={() => {
                                mudarPagina("menu");
                            }}>
                                Ver tudo <Img alt={"Imagem de seta"} estilo={style.seta_img} src={Seta} />
                            </Button>
                        </Link>
                    </div>
                </div>

            </div>
            <div className={style.area_fav_pratos}>
                <Pratos src={PratosDados[6].srcPrato} key={PratosDados[6].id} texto={PratosDados[6].texto} alt={PratosDados[6].alt} desc={PratosDados[6].desc} preco={PratosDados[6].preco} prato={PratosDados[6].nomePrato} />
                <Pratos src={PratosDados[0].srcPrato} key={PratosDados[0].id} texto={PratosDados[0].texto} alt={PratosDados[0].alt} desc={PratosDados[0].desc} preco={PratosDados[0].preco} prato={PratosDados[0].nomePrato} />
                <Pratos src={PratosDados[8].srcPrato} key={PratosDados[8].id} texto={PratosDados[8].texto} alt={PratosDados[8].alt} desc={PratosDados[8].desc} preco={PratosDados[8].preco} prato={PratosDados[8].nomePrato} />
            </div>
        </div>
    )
}

export default Favoritos;