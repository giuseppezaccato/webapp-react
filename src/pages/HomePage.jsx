//import
import { useState, useEffect } from "react"
import axios from "axios"
import MovieCard from '../components/MovieCard'

import { useGlobalContext } from "../contexts/GlobalContext"

export default function HomePage() {
    const endpoint = import.meta.env.VITE_ENDPOINT

    const { setIsLoading } = useGlobalContext()

    //task array reattivo
    const [movies, setMovies] = useState([])

    //task fetch
    const fetchMovies = () => {

        setIsLoading(true)

        axios.get(endpoint)
            .then((res) => {
                setMovies(res.data)
            })
            .catch((err) => console.error(err))
            .then(() => setIsLoading(false))
    };

    //task renderMovies
    const renderMovies = () => {

        return (
            movies.map((movie) => {
                return (

                    <MovieCard movie={movie} key={movie.id} />

                )
            })
        )
    }

    useEffect(fetchMovies, []);

    return (
        <>

            <h1 className="text-center text-uppercase">Boolywood</h1>

            <div className="container row row-cols-4">
                {
                    renderMovies() //task evocazione funzione rendering
                }
            </div>

        </>

    )
}

