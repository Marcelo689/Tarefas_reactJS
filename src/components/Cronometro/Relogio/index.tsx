import React from "react";
import style from "./relogio.module.scss";

interface Props{
    tempo : number | undefined
}

export default function Relogio({ tempo = 0 } : Props){
    const minutos = Math.floor( tempo / 60);
    const segundos = Math.floor( tempo % 60);
    const [minutosDezena, minutoUnidade] = String(minutos).padStart(2, "0");
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, "0");
    return(
        <React.Fragment>
            <span className={style.relogioNumero}>{minutosDezena}</span>
            <span className={style.relogioNumero}>{minutoUnidade}</span>
            :
            <span className={style.relogioNumero}>{segundoDezena}</span>
            <span className={style.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    );
}