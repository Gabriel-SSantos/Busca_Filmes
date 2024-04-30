import { useState, useEffect } from "react";
import { FilmeCard } from "../components/FilmeCard";

import "./FilmesGrid.css"

const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
    const [topFilmes, setTopFilmes] = useState([]);

    const getTopMelhoresFilmes = async (url) => {
        const res = await fetch(url);
        const dados = await res.json(); 
        setTopFilmes(dados.results)
    }

    useEffect(()=>{
        const topMelhoresUrl = `${moviesURL}top_rated?api_key=${apiKey}`
        getTopMelhoresFilmes(topMelhoresUrl)
    },[])
    return(
        <div className="container">
            <h2 className="title">Melhores Filmes</h2>
            <div className="movies-container">
                {topFilmes.length === 0 && <p>Carregando...</p>}
                {topFilmes.length > 0 && 
                    topFilmes.map((filmes)=> <FilmeCard filme={filmes} key={filmes.id}/>)}
            </div>
        </div>
    )
}

export default Home; 