import GridFadeProduct from '../../component/LayoutProducts/GridFadeProduct';

function SearchPage() {
    const searchResult = JSON.parse(localStorage.getItem('searchResult'));
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-100 float-left">
                <ol
                    className="breadcrumb parallax justify-content-center"
                    data-source-url="img/banner/parallax.jpg"
                    style={{ backgroundImage: 'url("img/banner/parallax.jpg")', backgroundPosition: '50% 0.809717%' }}
                >
                    <li className="breadcrumb-item active" aria-current="page">
                        Kết quả tìm kiếm
                    </li>
                </ol>
            </nav>
            <div className="main-content w-100 float-left">
                <div className="container">
                    <div className="row">
                        {/* Content Wrapper */}
                        <div className="content-wrapper col-xl-9 col-lg-9 order-lg-2">
                            <div className="block-category mb-30 w-100 float-left">
                                <div className="title-category text-capitalize"></div>
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
                                            <select name="sort" id="sort" onChange={(e) => {}}>
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
                                        {searchResult.map((product) => (
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
                                <div className="tab-pane fade list text-left" id="list" role="tabpanel"></div>
                                <div className="tab-pane fade sort text-left" id="sort-view" role="tabpanel"></div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;
