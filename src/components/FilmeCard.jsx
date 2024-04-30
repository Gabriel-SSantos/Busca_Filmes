import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const ImgUrl = import.meta.env.VITE_IMG

 export const FilmeCard = ({filme}, showLink=true) =>{
    return (
        <div className="movie-card">
            <img src={ImgUrl + filme.poster_path} alt={filme.title} />
            <h2>{filme.title}</h2>
            <p>
                <FaStar /> {filme.vote_average}
            </p>
            {showLink && <Link to={`/movie/${filme.id}`}>Detalhes</Link>}
        </div>
    )
}

// export default FilmeCard;