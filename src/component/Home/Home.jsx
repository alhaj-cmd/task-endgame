import Slide from '../../assets/image/silde/slide1.avif'
import Slide1 from '../../assets/image/silde/slide2.avif'
import Slide2 from '../../assets/image/silde/slide3.avif'

const Home = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src={Slide} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={Slide1} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={Slide2} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Home;