//task import 
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import MovieRev from "../components/MovieRev"
import RevForm from "../components/RevForm"
import { useGlobalContext } from "../contexts/GlobalContext"


export default function MoviePage() {

    const { id } = useParams();
    const [movie, setMovie] = useState({});
    const endpoint = import.meta.env.VITE_ENDPOINT
    const { setIsLoading } = useGlobalContext()

    //task fetch
    const fetchShowMovie = () => {
        setIsLoading(true)

        axios
            .get(`${endpoint}/${id}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.error(err))
            .then(() => setIsLoading(false))
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
            <div className="row row-cols-3 align-items-center my-4">

                <div className="col-4 mx-auto">
                    <div className="p-4">
                        <img className="card-img-top" src={movie.image} alt={movie.title} />
                        <div className="card-body text-center">
                            <h4 className=" card-title "> {movie.title}</h4>
                            <p className="card-text">{movie.director}</p>
                        </div>
                    </div>

                </div>
                <ul className="list-group list-group-flush ps-5">
                    {renderMovie()}
                </ul>

                {/* //task FORM per aggiungere una nuova review con componente => RevForm */}
                <section>
                    {movie?.id && <RevForm movie_id={movie.id} fetchShowMovie={fetchShowMovie} />}
                </section>
            </div>
        </>
    )
}