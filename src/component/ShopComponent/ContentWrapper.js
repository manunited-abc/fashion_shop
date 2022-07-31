import { useEffect, useState } from 'react';
import FadeListProduct from '../LayoutProducts/FadeListProduct';
import FadeSortProduct from '../LayoutProducts/FadeSortProduct';
import GridFadeProduct from '../LayoutProducts/GridFadeProduct';
import { selectFilterProduct } from '../../store/userSlice';
import { useSelector } from 'react-redux';

function ContentWrapper() {
    const products2 = [1, 2, 3, 4, 5, 6, 7, 8];
    const pageDefault = 0;
    const numberProductEachPage = 6;
    const [page, setPage] = useState(0);
    const [products, setProducts] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const pages = [];
    const categories = useSelector(selectFilterProduct);

    function fetchDataProduct(value, value2, value3) {
        fetch('http://localhost:8080/api/products/woman?page=' + value + '&numOfProduct=' + value2 + '&sort=' + value3)
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            });
    }
    function getNumberOfPage() {
        fetch('http://localhost:8080/api/products/number-product')
            .then((response) => response.json())
            .then((data) => {
                console.log(typeof data);
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
    useEffect(() => {
        localStorage.removeItem('sort');
        localStorage.removeItem('page');
        fetchDataProduct(0, numberProductEachPage, 3);
        getNumberOfPage();
    }, []);
    return (
        <div className="content-wrapper col-xl-9 col-lg-9 order-lg-2">
            <div className="block-category mb-30 w-100 float-left">
                <div className="title-category text-capitalize">Nữ</div>
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
                                    fetchDataProduct(page, numberProductEachPage, sort);
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
                        {categories.length == 0
                            ? products.map((product) => (
                                  <GridFadeProduct
                                      description={product.description}
                                      name={product.name}
                                      price={product.price}
                                      images={product.images.sort()}
                                      id={product.id}
                                  />
                              ))
                            : categories.map((category) => (
                                  <GridFadeProduct
                                      description={category.description}
                                      name={category.name}
                                      price={category.price}
                                      images={category.images}
                                      id={category.id}
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
                                        fetchDataProduct(item - 1, numberProductEachPage, sort);
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
    );
}
export default ContentWrapper;
