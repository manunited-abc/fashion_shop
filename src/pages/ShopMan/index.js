import './shop-man.scss';
import { useEffect, useState } from 'react';
import FadeListProduct from '../../component/LayoutProducts/FadeListProduct';
import FadeSortProduct from '../../component/LayoutProducts/FadeSortProduct';
import GridFadeProduct from '../../component/LayoutProducts/GridFadeProduct';
import { selectFilterProduct } from '../../store/userSlice';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
function ShopMan() {
    const products2 = [1, 2, 3, 4, 5, 6, 7, 8];
    const pageDefault = 0;
    const numberProductEachPage = 6;
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const pages = [];
    const [categoryTitle, setCategoryTitle] = useState('Tất cả');
    const [categories, setCategories] = useState([]);
    const [value, setValue] = useState([0, 50]);

    function filterProduct(categoryId, page, numOfProduct, sort, min, max) {
        fetch(
            `http://localhost:8080/api/products/man/${categoryId}/?page=${page}&numOfProduct=${numOfProduct}&sort=${sort}&min=${min}&max=${max}`,
        )
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }
    function getNumberOfPage(categoryId) {
        fetch('http://localhost:8080/api/products/number-product/man/' + categoryId)
            .then((response) => response.json())
            .then((data) => {
                setTotalPage(Math.ceil(data / numberProductEachPage));
            });
    }
    for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
    }
    function removeActive() {
        var actives = document.querySelectorAll('.page-item');
        for (var i of actives) {
            i.classList.remove('active');
        }
    }
    //Lọc thể loại
    const rangeSelector = (event, newValue) => {
        setValue(newValue);
    };
    function fetchDataCategory() {
        fetch('http://localhost:8080/api/category/man')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data);
            });
    }
    function chooseCategory() {
        const categoriesTag = document.querySelectorAll('.nav-link.d-flex.justify-content-between.mb-2');
        for (let x of categoriesTag) {
            x.style.color = '#666';
            x.style.fontWeight = '400';
        }
    }
    //Lọc giá
    useEffect(() => {
        fetchDataCategory();
        localStorage.removeItem('sort');
        localStorage.removeItem('page');
        localStorage.removeItem('categoryId');
        filterProduct(-1, 0, numberProductEachPage, -1, -1, -1);
        getNumberOfPage(-1);
    }, []);
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-100 float-left">
                <ol
                    className="breadcrumb parallax justify-content-center"
                    data-source-url="img/banner/parallax.jpg"
                    style={{ backgroundImage: 'url("img/banner/parallax.jpg")', backgroundPosition: '50% 0.809717%' }}
                >
                    <li className="breadcrumb-item active" aria-current="page">
                        THỜI TRANG NAM
                    </li>
                </ol>
            </nav>
            <div className="main-content w-100 float-left">
                <div className="container">
                    <div className="row">
                        {/* Content Wrapper */}
                        <div className="content-wrapper col-xl-9 col-lg-9 order-lg-2">
                            <div className="block-category mb-30 w-100 float-left">
                                <div className="title-category text-capitalize">{categoryTitle}</div>
                                <div className="category-description"></div>
                            </div>
                            <header className="product-grid-header d-flex d-xs-block d-sm-flex d-lg-flex w-100 float-left">
                                <div className="hidden-sm-down total-products d-flex d-xs-block d-lg-flex col-md-3 col-sm-3 col-xs-12 align-items-center">
                                    <div className="row">
                                        <div className="nav" role="tablist">
                                            <a
                                                className="grid active"
                                                href="#grid"
                                                data-toggle="tab"
                                                role="tab"
                                                aria-selected="true"
                                                aria-controls="grid"
                                            >
                                                <i className="material-icons align-middle">grid_on</i>
                                            </a>
                                            <a
                                                className="list"
                                                href="#list"
                                                data-toggle="tab"
                                                role="tab"
                                                aria-selected="false"
                                                aria-controls="list"
                                            >
                                                <i className="material-icons align-middle">format_list_bulleted</i>
                                            </a>
                                            <a
                                                className="sort"
                                                href="#sort-view"
                                                data-toggle="tab"
                                                role="tab"
                                                aria-selected="false"
                                                aria-controls="sort-view"
                                            >
                                                <i className="material-icons align-middle">reorder</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-results-wrapper d-flex d-sm-flex d-xs-block d-lg-flex justify-content-end col-md-9 col-sm-9 col-xs-12">
                                    <div className="shop-results d-flex align-items-center">
                                        <span>Sắp xếp</span>
                                        <div className="shop-select">
                                            <select
                                                name="sort"
                                                id="sort"
                                                onChange={(e) => {
                                                    var sort = e.target.selectedIndex;
                                                    console.log(sort);
                                                    var page = localStorage.getItem('page') || 0;
                                                    localStorage.setItem('sort', sort);
                                                    var categoryId = localStorage.getItem('categoryId') || -1;
                                                    var filterPrice = JSON.parse(
                                                        localStorage.getItem('filterPrice'),
                                                    ) || [-1, -1];
                                                    console.log(filterPrice.length);
                                                    filterProduct(
                                                        categoryId,
                                                        page,
                                                        numberProductEachPage,
                                                        sort,
                                                        filterPrice[0],
                                                        filterPrice[1],
                                                    );
                                                }}
                                            >
                                                <option defaultValue={'default'}>Mặt định</option>
                                                <option defaultValue={'asc'}>Giá từ cao - thấp</option>
                                                <option defaultValue={'des'}>Giá từ thấp - cao</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </header>
                            <div className="tab-content text-center products w-100 float-left">
                                <div className="tab-pane grid fade active" id="grid" role="tabpanel">
                                    <div className="row">
                                        {products.map((product) => (
                                            <GridFadeProduct
                                                description={product.description}
                                                name={product.name}
                                                price={product.price}
                                                images={product.images.sort()}
                                                id={product.id}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="tab-pane fade list text-left" id="list" role="tabpanel">
                                    {products2.map((a, b) => (
                                        <FadeListProduct />
                                    ))}
                                </div>
                                <div className="tab-pane fade sort text-left" id="sort-view" role="tabpanel">
                                    {products2.map((a, b) => (
                                        <FadeSortProduct />
                                    ))}
                                </div>
                            </div>
                            <div className="pagination-wrapper float-left w-100">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                                <span className="sr-only">Previous</span>
                                            </a>
                                        </li>
                                        {pages.map((item) => (
                                            <li className="page-item ">
                                                <a
                                                    className="page-link"
                                                    onClick={(e) => {
                                                        removeActive();
                                                        e.target.parentElement.classList.add('active');
                                                        localStorage.setItem('page', item - 1);
                                                        var sort = localStorage.getItem('sort') || 3;
                                                        var categoryId = localStorage.getItem('categoryId') || -1;
                                                        filterProduct(
                                                            categoryId,
                                                            item - 1,
                                                            numberProductEachPage,
                                                            sort,
                                                            -1,
                                                            -1,
                                                        );
                                                    }}
                                                >
                                                    {item}
                                                </a>
                                            </li>
                                        ))}
                                        <li className="page-item">
                                            <a className="page-link" href="#" aria-label="Next">
                                                <span aria-hidden="true">»</span>
                                                <span className="sr-only">Next</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        {/* Left sidebar */}
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
                                                        localStorage.setItem('categoryId', -1);
                                                        filterProduct(-1, 0, numberProductEachPage, -1, -1, -1);
                                                        chooseCategory();
                                                        getNumberOfPage(-1);
                                                        setCategoryTitle('Tất cả');
                                                        localStorage.removeItem('filterPrice');
                                                        e.target.style.color = '#000';
                                                        e.target.style.fontWeight = '600';
                                                    }}
                                                    className="nav-link d-flex justify-content-between mb-2 "
                                                >
                                                    Tất cả
                                                    <span className="sidebar-badge"></span>
                                                </a>
                                                {categories.map((category) => (
                                                    <a
                                                        onClick={(e) => {
                                                            filterProduct(
                                                                category.id,
                                                                0,
                                                                numberProductEachPage,
                                                                -1,
                                                                -1,
                                                                -1,
                                                            );
                                                            localStorage.setItem('categoryId', category.id);
                                                            chooseCategory();
                                                            e.target.style.color = '#000';
                                                            e.target.style.fontWeight = '600';
                                                            setCategoryTitle(category.category);
                                                            localStorage.removeItem('filterPrice');
                                                            localStorage.removeItem('page');
                                                            getNumberOfPage(category.id);
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
                                                Lọc giá
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
                                                    <Slider
                                                        value={value}
                                                        onChange={rangeSelector}
                                                        valueLabelDisplay="auto"
                                                    />{' '}
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
                                                            filterProduct(
                                                                -1,
                                                                0,
                                                                9,
                                                                -1,
                                                                value[0] * 100000,
                                                                value[1] * 100000,
                                                            );
                                                            var minPrice = value[0] * 100000;
                                                            var maxPrice = value[1] * 100000;

                                                            localStorage.setItem(
                                                                'filterPrice',
                                                                JSON.stringify([minPrice, maxPrice]),
                                                            );
                                                            localStorage.setItem('categoryId', -1);
                                                            localStorage.setItem('page', 0);
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
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShopMan;
