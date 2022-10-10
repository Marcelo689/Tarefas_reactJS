import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";
import { tempoParaSegundos } from "../../common/utils/date";
import { ITarefa } from "../../types/tarefa";
import { useState, useEffect } from 'react';
interface Props{
    selecionado: ITarefa | undefined,
    finalizado: () => void
}


export default function Cronometro({selecionado, finalizado} : Props){
   
    const [tempo, setTempo] = useState<number>();
    useEffect( () => {
        if(selecionado?.tempo){
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);
   
    function regressiva(contador : number = 0){
        setTimeout( () => {
            if(contador > 0)
            {
                setTempo(contador -1);
                return regressiva(contador -1);
            }
            finalizado();
        }, 1000);
    }
    
    return (
    <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        Tempo: { tempo }
        <div className={style.relogioWrapper}>
            <Relogio tempo={tempo}/>
        </div>
        <Botao onClick={ () => { regressiva(tempo) } }>
            Começar
        </Botao>
    </div>)
}