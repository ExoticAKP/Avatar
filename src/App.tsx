import Navbar from './Components/Navbar/Navbar.tsx'
import FeaturedProduct from "./Components/FeaturedProducts/FeaturedProduct.tsx";
import SwiperComponent from "./Components/Swiper/SwiperComponent.tsx";

const App: React.FC = () => {
    return (
        <div className="App">
            <Navbar />
            <FeaturedProduct />
            <SwiperComponent />
        </div>
    )
}

export default App
