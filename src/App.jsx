import DefaultLayout from "./layouts/DefaultLayout"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/Movies/:id" Component={MoviePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
