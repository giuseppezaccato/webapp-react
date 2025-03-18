//import
import { Link } from "react-router-dom"


export default function MovieCard({ movie }) {

    const { id,
        director,
        title,
        genre,
        release_year,
        abstract,
        image,
    } = movie

    return (
        <div className="card mx-auto my-5">
            <img className="card-img-top" src={image} alt={title} />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <h5 className="card-title">{genre},{release_year} </h5>
                <p className="card-text">{abstract}</p>
                <p className="card-text">{director}</p>
                <Link to={`/movies/${id}`} > More </Link>
            </div>
        </div>
    )

}