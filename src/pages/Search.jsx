import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilmeCard } from "../components/FilmeCard";

const buscaURL = import.meta.env.VITE_SEARCH 
const apiKey = import.meta.env.VITE_API_KEY

import "./FilmesGrid.css"


const Search = () => {

    const [searchparamns] = useSearchParams()

    const [filmes, setFilmes] = useState([])
    const query = searchparamns.get("q")

    const getBuscaFilmes = async (url) => {
        const res = await fetch(url);
        const dados = await res.json(); 
        setFilmes(dados.results)
    }

    useEffect(()=>{
        const BuscaUrl = `${buscaURL}?api_key=${apiKey}&query=${query}`
        getBuscaFilmes(BuscaUrl)
    },[query])

    return(
        <div className="container">
            <h2 className="title">Resultados da Busca por <span className="query-text">{query}</span></h2>
            <div className="movies-container">
                {filmes.length === 0 && <p>Carregando...</p>}
                {filmes.length > 0 && 
                    filmes.map((filme)=> <FilmeCard filme={filme} key={filme.id}/>)}
            </div>
        </div>
    )
}

export default Search; 