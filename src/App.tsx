import './App.css'
import NavScroll from './pages/Navbar'
import TheFooter from './pages/Rodape'
import { AppRouter } from './pages/Routers'

function App() {
    return (
    <>
      <NavScroll />

      <AppRouter />

      <TheFooter />
    </>
    )
}

export default App
