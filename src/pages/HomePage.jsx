//import
import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from '../components/MovieCard'

export default function HomePage() {

    //task array reattivo
    const [movies, setMovies] = useState([])

    //fetch
    const fetchMovies = () => {
        axios.get('http://localhost:3000/movies')
            .then((res) => {
                setMovies(res.data)
            })
            .catch((err) => console.error(err))
    };

    useEffect(fetchMovies, []);

    return (
        <>

            <h1 className="text-center text-uppercase">Boolywood</h1>

            <div className="container row row-cols-4">
                {
                    movies.map((movie) => {
                        return (
                            <div className="col" key={movie.id} >
                                <MovieCard movie={movie} />
                            </div>
                        )
                    })

                }
            </div>

        </>

    )
}