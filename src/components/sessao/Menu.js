import { useState } from "react";
import Button from "../buttons/Button";
import Hero from "../hero/Hero";
import style from "./Menu.module.css";
import Pedido from "../pedido/Pedido";
import Pratos from "../pratos/Pratos";
import Passos from "../pratos/Passos";
import ImgHero from "../assets/img.png";
import Mensagem from "../assets/cht.svg";
import colherGarfo from "../assets//comer.svg";
import carrinho from "../assets/carrinho.svg";
import eat from "../assets/eat.svg";
import PratosDados from "../data/Pratos";

const Menu = () => {
    const [mostrarTodosPratos, setMostrarTodosPratos] = useState(false);
    const PratosMenu = PratosDados.filter((prato) => prato.id !== 1 && prato.id !== 7 && prato.id !== 9)

    const onClick = (evt) => {
        if (mostrarTodosPratos) {
            setMostrarTodosPratos(false);
            evt.target.innerHTML = "Ver Todos";
        } else {
            setMostrarTodosPratos(true);
            evt.target.innerHTML = "Ver Menus";
        }
    }

    return (
        <div className={style.menu}>
            <Hero alt={"Ícone do hero da sessão do meun!"} src={ImgHero} mostrarExplorar={false} imgFundo={false} mens={"Peça os pratos mais icónicos dos melhores restaurantes locais com a rapidez e segurança que você merece."} titulo={"O melhor da culinária moçambicana"} tituloFoco={" na sua mesa."} />
            <div className={style.area_menu}>
                <div className={style.titulo_area_menu}>
                    <h2>Menu</h2>
                    <div className={style.actao_menu_mais}>
                        <div className={style.min_desc_menu}>
                            Os favoritos da nossa comunidade!
                        </div>
                        <div className={style.area_btn_ver}>
                            <Button children={"Ver Todos"} estilo={style.btn_menu_ver} onClick={(evt) => {
                                onClick(evt);
                            }} />
                        </div>
                    </div>
                </div>
                <div className={style.pratos_d_menu}>
                    <Pratos src={PratosDados[6].srcPrato} alt={PratosDados[6].alt} desc={PratosDados[6].desc} preco={PratosDados[6].preco} prato={PratosDados[6].nomePrato} />
                    <Pratos src={PratosDados[0].srcPrato} alt={PratosDados[0].alt} desc={PratosDados[0].desc} preco={PratosDados[0].preco} prato={PratosDados[0].nomePrato} />
                    <Pratos src={PratosDados[8].srcPrato} alt={PratosDados[8].alt} desc={PratosDados[8].desc} preco={PratosDados[8].preco} prato={PratosDados[8].nomePrato} />
                    {
                        mostrarTodosPratos && (
                            PratosMenu.map((prato) => {
                                return <Pratos src={prato.srcPrato} alt={prato.alt} desc={prato.desc} preco={prato.preco} prato={prato.nomePrato} />;
                            })
                        )
                    }
                </div>
                <Passos titulo={"Como Funciona o MozFood"} minInfo={"A sua refeição favorita em apenas 3 passos simples."} srcs={[colherGarfo, carrinho, eat]} descs={["Escolha centenas de pratos e restaurantes selecionados.", "Confirme o seu pedido e escolha o método de pagamento.", "Receba a sua comida quente e fresca em tempo recorde."]} alts={["Ícone de colher e garfo cruzados", "Ícone de carrinho de super mercado", "Ícone de carro de entrega"]} passos={["1. Escolha", "2. Peça", "3. Saboreie"]} />
                <Pedido tipo={2} alt={"Ícone de mensagem"} titulo_pedido={"Pronto pra comer ?"} desc_pedido={"Peçca agora pelos nossos canais exclusivos no WhatsApp e receba descontos especias na sua primeira compra."} src={Mensagem} texto={"Pedir pelo WhatsApp"} estiloBtn={style.btn_comer} />
            </div>
        </div>
    );
}

export default Menu;