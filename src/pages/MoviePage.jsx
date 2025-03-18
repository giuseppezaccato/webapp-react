//task import 
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import MovieRev from "../components/MovieRev"


export default function MoviePage() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const endpoint = import.meta.env.VITE_ENDPOINT

    //task fetch
    const fetchShowMovie = () => {
        axios
            .get(`${endpoint}/${id}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.error(err));
    }

    //task funzione render
    const renderMovie = () => {
        return (
            movie.reviews?.map((m) => {
                return (
                    <MovieRev key={m.id} rev={m} />
                )
            })

        )
    };

    useEffect((fetchShowMovie), [id]);
    return (
        <>
            <div className="col-4 mx-auto">
                <div className="p-3">
                    <img className="card-img-top" src={movie.image} alt={movie.title} />
                    <div className="card-body text-center">
                        <h4 className=" card-title "> {movie.title}</h4>
                        <p className="card-text">{movie.director}</p>
                    </div>
                </div>

                <ul className="list-group list-group-flush d-flex">
                    {renderMovie()}
                </ul>
            </div>

        </>
    )
}