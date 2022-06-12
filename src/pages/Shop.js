import ContentWrapper from '../component/ShopComponent/ContentWrapper';
import Sidebar from '../component/ShopComponent/Sidebar';
import '../component/ShopComponent/TawkAPI.js';

function Shop() {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-100 float-left">
                <ol
                    className="breadcrumb parallax justify-content-center"
                    data-source-url="img/banner/parallax.jpg"
                    style={{ backgroundImage: 'url("img/banner/parallax.jpg")', backgroundPosition: '50% 0.809717%' }}
                >
                    <li className="breadcrumb-item active" style={{ fontSize: '50px' }} aria-current="page">
                        Thời trang nữ
                    </li>
                </ol>
            </nav>
            <div className="main-content w-100 float-left">
                <div className="container">
                    <div className="row">
                        {/* Content Wrapper */}
                        <ContentWrapper />
                        {/* Left sidebar */}
                        <Sidebar />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Shop;
