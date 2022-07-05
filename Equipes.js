import React,{ useState } from 'react';
import './equipe.css'


const frutas =[
    'laranja','banana','morango','manga','melao','abacate','acelora','pera','uva'
];

export default function Equipes() {

    const [busca,setBusca] = useState('');

    const lowerBusca = busca.toLowerCase();
    
    const frutasFiltradas = frutas.filter((fruta) => fruta.toLowerCase().includes(lowerBusca));

    return(
        <>
        <div className="app">
            <h1>lucas vende frutas</h1>
            <input type="text" value={busca} onChange={(ev) => setBusca(ev.target.value)}
            ></input>
            <ul>
                {frutasFiltradas.map((fruta) => (
                    <li>{fruta}</li>                    
                ))}
            </ul>
        </div>
        </>
    )
}