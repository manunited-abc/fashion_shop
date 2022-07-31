import { useEffect, useState } from 'react';
import { setFilterProduct } from '../../store/userSlice';
import { useDispatch } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
function Sidebar() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const [value, setValue] = useState([0, 50]);
    //Lọc thể loại
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
    };
    function fetchDataCategory() {
        fetch('http://localhost:8080/api/category/woman')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });
    }
    useEffect(() => {
        fetchDataCategory();
    }, []);
    function fetchDataProduct(categoryId) {
        fetch('http://localhost:8080/api/products/woman/' + categoryId + '?page=0&numOfProduct=6')
            .then((response) => response.json())
            .then((data) => {
                const products = [];
                for (let x of data) {
                    const product = {
                        id: x.id,
                        name: x.name,
                        description: x.description,
                        price: x.price,
                        images: x.images.sort(),
                        categoryId: x.categoryId,
                    };
                    products.push(product);
                }

                dispatch(setFilterProduct(products));
            });
    }
    function chooseCategory() {
        const categoriesTag = document.querySelectorAll('.nav-link.d-flex.justify-content-between.mb-2');
        for (let x of categoriesTag) {
            x.style.color = '#666';
            x.style.fontWeight = '400';
        }
    }
    useEffect(() => {
        fetchDataCategory();
    }, []);
    //Lọc giá
    const getProductByPrice = () => {
        fetch(`http://localhost:8080/api/products/filter?min=${value[0] * 100000}&max=${value[1] * 100000}`)
            .then((res) => res.json())
            .then((res) => {
                const products = [];
                for (let x of res) {
                    const product = {
                        id: x.id,
                        name: x.name,
                        description: x.description,
                        price: x.price,
                        images: x.images.sort(),
                        categoryId: x.categoryId,
                    };
                    products.push(product);
                }
                dispatch(setFilterProduct(products));
            });
    };

    function getProductByCategory() {}
    return (
        <div className="left-column sidebar col-xl-3 col-lg-3 order-lg-1">
            <div className="sidebar-filter left-sidebar w-100 float-left">
                <div className="title">
                    <a
                        data-toggle="collapse"
                        href="#sidebar-main"
                        aria-expanded="false"
                        aria-controls="sidebar-main"
                        className="d-lg-none block-toggler"
                    >
                        Product Categories
                    </a>
                </div>
                <div id="sidebar-main" className="sidebar-main collapse">
                    <div className="sidebar-block categories">
                        <h3 className="widget-title">
                            <a
                                data-toggle="collapse"
                                href="#categoriesMenu"
                                role="button"
                                aria-expanded="true"
                                aria-controls="categoriesMenu"
                            >
                                Thể loại
                            </a>
                        </h3>
                        <div id="categoriesMenu" className="expand-lg collapse show">
                            <div className="nav nav-pills flex-column mt-4">
                                <a
                                    onClick={(e) => {
                                        window.location.reload();
                                    }}
                                    className="nav-link d-flex justify-content-between mb-2 "
                                >
                                    Tất cả
                                    <span className="sidebar-badge"></span>
                                </a>
                                {categories.map((category) => (
                                    <a
                                        onClick={(e) => {
                                            fetchDataProduct(category.id);
                                            chooseCategory();
                                            e.target.style.color = '#000';
                                            e.target.style.fontWeight = '600';
                                        }}
                                        className="nav-link d-flex justify-content-between mb-2 "
                                        key={category.id}
                                    >
                                        {category.category}
                                        <span className="sidebar-badge"></span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-block price">
                        <h3 className="widget-title">
                            <a
                                data-toggle="collapse"
                                href="#price"
                                role="button"
                                aria-expanded="true"
                                aria-controls="price"
                            >
                                Price
                            </a>
                        </h3>
                        <div id="price" className="collapse show">
                            <div className="price-inner">
                                <label htmlFor="amount">Price range:</label>
                                <input
                                    type="text"
                                    id="amount"
                                    readOnly
                                    style={{ border: 0, fontWeight: 'bold', background: 'none' }}
                                />
                                {/* <div id="slider-range" >
                  
                </div> */}
                                <div
                                    style={{
                                        margin: 'auto',
                                        display: 'block',
                                        width: '100%',
                                    }}
                                >
                                    <Typography id="range-slider" gutterBottom></Typography>
                                    <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />{' '}
                                    {new Intl.NumberFormat('vn-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(value[0] * 100000)}{' '}
                                    -{' '}
                                    {new Intl.NumberFormat('vn-VN', {
                                        style: 'currency',
                                        currency: 'VND',
                                    }).format(value[1] * 100000)}
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block "
                                        style={{ marginTop: '20px' }}
                                        onClick={(e) => {
                                            getProductByPrice();
                                        }}
                                    >
                                        Lọc
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-left-banner left-sidebar w-100 float-left">
                <div className="ttleftbanner">
                    <a href="#">
                        <img src="img/banner/left-banner.jpg" alt="left-banner" />
                    </a>
                </div>
            </div>
            <div className="sidebar-product left-sidebar w-100 float-left">
                <div className="title">
                    <a
                        data-toggle="collapse"
                        href="#sidebar-product"
                        aria-expanded="false"
                        aria-controls="sidebar-product"
                        className="d-lg-none block-toggler"
                    >
                        sale products
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Sidebar;
