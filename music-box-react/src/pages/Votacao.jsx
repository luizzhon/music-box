import React, {useState} from 'react';



return(

    function votar() {
        setNumero(numero + 1);
    }

    function Votacao(props) {
        const [numero, setNumero] = useState(0);
        return (
            <>
            <h1>{props.titulo}</h1>
                <button>Votar</button>
                <h1>Quantidade de votos: {numero}</h1>
            
            </>
        )
    }
)


export default Votacao;