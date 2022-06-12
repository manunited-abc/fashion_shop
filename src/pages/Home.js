import Banner from '../component/HomeComponent/Banner';
import BrandLogo from '../component/HomeComponent/BrandLogo';
import NewsLatest from '../component/HomeComponent/NewsLatest';
import SliderMain from '../component/HomeComponent/SliderMain';
import SpecialProduct from '../component/HomeComponent/SpecialProduct';
import SubBanner from '../component/HomeComponent/SubBanner';
import Testimonial from '../component/HomeComponent/Testimonial';
import TrendingProduct from '../component/HomeComponent/TrendingProduct';
import useScript from '../hook/useScript.js';
function Home() {
    return (
        <main>
            {/* Main jumbotron for a primary marketing message or call to action */}
            <SliderMain />
            <div className="main-content">
                <Banner />
                <div id="main">
                    <TrendingProduct />
                    <Testimonial />
                    <SpecialProduct />
                    <NewsLatest />
                    <BrandLogo />
                </div>
            </div>
        </main>
    );
}
export default Home;
