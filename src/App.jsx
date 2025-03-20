import DefaultLayout from "./layouts/DefaultLayout"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import { GlobalProvider, useGlobalContext } from "./contexts/GlobalContext"


function App() {

  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route Component={DefaultLayout}>
              <Route path="/" Component={HomePage} />
              <Route path="/Movies/:id" Component={MoviePage} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
