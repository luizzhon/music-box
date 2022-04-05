import React from "react";
import ItemMusica from "../components/ItemMusica";

function Musicas() {
    return (
        <>
            <div className="container">
                <div className="filter">
                    <button className="btn">Adicionar</button>
                </div>
            </div>

            <div className="container">
                <div className="music-boxes">

                    <ItemMusica 
                    musica= "Coração gelado 3"
                    artista= "Mc Joãozinho VT"
                    genero= "Funk"
                    ano= {2021}
                    id= "1"
                    />

                    <ItemMusica 
                    musica= "Chama o coveiro"
                    artista= "Mc Delux"
                    genero= "Funk"
                    ano= {2021}
                    id= "1"
                    />

                </div>
            </div>
        </>
    )
}

export default Musicas;