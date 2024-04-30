import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'

import {FilmeCard} from "../components/FilmeCard"

const filmesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

import './Filme.css'

const Movie = () => {
    const {id} = useParams();
    const [filme,setFilme] = useState(null);

    const getFilme = async (url) => {
        const res = await fetch(url);
        const dados = await res.json(); 
        setFilme(dados)
    }

    useEffect(()=> {
        const filmeURL = `${filmesURL}${id}?api_key=${apiKey}`
        getFilme(filmeURL)
    },[])

    const formatCurrency = (number) => {
        return number.toLocaleString("en-us",{
            style: "currency",
            currency: "USD",
        });
    };

    return(
        <div className="movie-page">
            {filme && 
            <>
                <FilmeCard filme={filme} showLink={false}/>
                <p className="tagline">{filme.tagline}</p>
                <div className="info">
                    <h3>
                        <BsWallet2 /> Orçamento:
                    </h3>
                    <p>{formatCurrency(filme.budget)}</p>
                </div>
                <div className="info">
                    <h3>
                        <BsGraphUp /> Receita:
                    </h3>
                    <p>{formatCurrency(filme.revenue)}</p>
                </div> 
                 <div className="info">
                    <h3>
                        <BsHourglassSplit /> Duração:
                    </h3>
                    <p>{filme.runtime} minutos</p>
                </div>
                <div className="description">
                    <h3>
                        <BsFillFileEarmarkTextFill /> Descrição:
                    </h3>
                    <p>{filme.overview}</p>
                </div>
            </>
            }
        </div>
    )
}

export default Movie; 