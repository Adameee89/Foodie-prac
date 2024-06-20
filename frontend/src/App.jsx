import { Route, Routes } from "react-router-dom"
import NavbarComponent from "./components/Navbar/NavbarComponent"
import CartPage from "./pages/CartPage"
import PlaceOrderPage from "./pages/PlaceOrderPage"
import HomePage from "./pages/HomePage"
import FooterComponent from "./components/Footer/FooterComponent"
import { useState } from "react"
import LoginPopUpComponent from "./components/LoginPopUp/LoginPopUpComponent"


function App() {

  const [showLogin, setShowLogin] = useState(false)


  return (
    <>
    {showLogin ? <LoginPopUpComponent setShowLogin={setShowLogin}/> : <></>}
    <div className="app">
      <NavbarComponent setShowLogin={setShowLogin}/>
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
    </>
  )
}

export default App
