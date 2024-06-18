import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/Navbar/NavbarComponent"
import CartPage from "./pages/CartPage"
import PlaceOrderPage from "./pages/PlaceOrderPage"
import HomePage from "./pages/HomePage"
import FooterComponent from "./components/Footer/FooterComponent"


function App() {


  return (
    <div className="app">
      <NavbarComponent/>
      <Routes>
        <Route 
          path="/" 
          element={<HomePage/>}/>
          <Route 
          path="/cart" 
          element={<CartPage/>}/>
          <Route 
          path="/order" 
          element={<PlaceOrderPage/>}/>
      </Routes>
      <FooterComponent/>
    </div>
  )
}

export default App
