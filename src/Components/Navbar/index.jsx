import React, { useContext, useState } from "react";
import companylogo from "../../assets/comlogo.PNG";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { DataContext } from "../../Context";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLogin, setIslogin } = useContext(DataContext)

  const cartNavigate = () => {
    if (isLogin) {
      navigate('/cart')
    } else {
      navigate('/login')
    }
  }

  const categoryHandle = (e) => {
    const value = e.target.value;

    const routes = {
      mens: "/mensCloth",
      women: "/womenCloth",
      electronic: "/electronics",
      jewelery: "/jewelery",
    };

    navigate(routes[value] || "/");
    setMenuOpen(false)
  };

  const handlelogout = () => {
    setIslogin(false)
    navigate('/login')

  }


  return (
    <div className="nav-bar-main-conatainer">
      <img src={companylogo} alt="logo" className="company-logo" />

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        {"\u2630"}
      </button>

      {/* Menu */}
      <div className={`list-container ${menuOpen ? "active" : ""}`}>
        <ul className="list-items">
          <li onClick={() => navigate("/")}>Home</li>

          <li>
            <select className="drop-down-section" defaultValue="" onChange={categoryHandle}>
              <option value="" disabled>Category</option>
              <option value="mens">Mens</option>
              <option value="women">Womens</option>
              <option value="electronic">Electronics</option>
              <option value="jewelery">Jewelery</option>
            </select>
          </li>

          <li onClick={cartNavigate}>Cart</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        <button className="logout-button" onClick={handlelogout}>{isLogin ? 'Logout' : 'Login'}</button>
      </div>
    </div>
  );
}
