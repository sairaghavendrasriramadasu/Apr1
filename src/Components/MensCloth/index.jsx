import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { DataContext } from "../../../Context";
import './index.css'
import { useNavigate } from "react-router-dom";

function Menscloth() {
    const { data, loading, isLogin, addToCart } = useContext(DataContext);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const navigate = useNavigate()

    const mensFilter = data.filter(
        (items) => items.category === `men's clothing`,
    );

    

    const chunkArray = (array, size) => {
        const result = [];
        for (let i = 0; i < array.length; i += size) {
            result.push(array.slice(i, i + size));
        }
        return result;
    };

    const addingCart = (item) => {
        if (isLogin) {
            addToCart(item)
        } else {
            navigate('/login')
        }
    }

    useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth < 576) {
      setItemsPerSlide(1); // 📱 mobile
    } else if (window.innerWidth < 768) {
      setItemsPerSlide(2); // small tablet
    } else if (window.innerWidth < 992) {
      setItemsPerSlide(3); // tablet
    } else {
      setItemsPerSlide(4); // 💻 desktop
    }
  };

  handleResize(); // run once
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

    const groupedItems = chunkArray(mensFilter, itemsPerSlide);

    if (loading) return <p>Loading...</p>;
    return (
        <>
            <Carousel
                autoPlay={false}
                interval={null}
                pause={false}
                controls={true}
                indicators={false}
            >
                {groupedItems.map((group, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center gap-3">
                            {group.map((item) => (
                                <>
                                    <div className="product-card">
                                        <img src={item.image} alt="" className="product-img" />

                                        <div className="product-body">
                                            <div className="title-row">
                                                <h5 className="title">
                                                    {item.title.length > 20
                                                        ? item.title.slice(0, 20) + "..."
                                                        : item.title}
                                                </h5>

                                                <div className="rating">
                                                    {"★".repeat(Math.round(item.rating.rate))}
                                                </div>
                                            </div>

                                            <div className="bottom-row">
                                                <span className="price">${item.price}</span>

                                                <div className="icons">
                                                    <span className="heart">♡</span>
                                                    <span className="cart" onClick={() => addingCart(item)}>🛒</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
}

export default Menscloth;
