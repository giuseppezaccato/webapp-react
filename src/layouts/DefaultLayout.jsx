import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../contexts/GlobalContext";
import Loader from "../components/Loader";

export default function DefaultLayout() {

    const { isLoading } = useGlobalContext()

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />

                {isLoading && <Loader />}
            </main>
        </>
    )
}