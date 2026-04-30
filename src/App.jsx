import './App.css'
import Login from './Components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Dataprovider from './Context'
import About from './Components/Categoriescomponents/About'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Menscategorycloth from './Components/Menscategory'
import Womenscategorycloth from './Components/Womencategory'
import Electronicscategory from './Components/Electronics'
import Cart from './Components/Cart'
import Mainlayout from './Mainlayout'



function App() {
  return (
    <>
      <Dataprovider>
        <BrowserRouter>
         <Routes>
          <Route path='/login' element={<Login />} />

          <Route element={<Mainlayout />}>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='mensCloth' element={<Menscategorycloth />} />
            <Route path='womenCloth' element={<Womenscategorycloth />} />
            <Route path='electronics' element={<Electronicscategory />} />
            <Route path='cart' element={<Cart />} />
          </Route>

        </Routes>
        </BrowserRouter>
      </Dataprovider>

    </>
  )
}

export default App
