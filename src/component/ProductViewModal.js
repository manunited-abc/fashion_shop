function ProductViewModal() {
    return (
        <div className="modal fade product_view" id="product_view" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title w-100w-100w-100 font-weight-bold d-none">Quick view</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 left-columm">
                                <div className="product-large-image tab-content">
                                    <div
                                        className="tab-pane active"
                                        id="product-1"
                                        role="tabpanel"
                                        aria-labelledby="product-tab-1"
                                    >
                                        <div className="single-img img-full">
                                            <a href="img/products/01.jpg">
                                                <img
                                                    src="img/products/01.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                    width={368}
                                                    height={478}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="product-2"
                                        role="tabpanel"
                                        aria-labelledby="product-tab-2"
                                    >
                                        <div className="single-img">
                                            <a href="img/products/02.jpg">
                                                <img
                                                    src="img/products/02.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                    width={368}
                                                    height={478}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="product-3"
                                        role="tabpanel"
                                        aria-labelledby="product-tab-3"
                                    >
                                        <div className="single-img">
                                            <a href="img/products/03.jpg">
                                                <img
                                                    src="img/products/03.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                    width={368}
                                                    height={478}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="product-4"
                                        role="tabpanel"
                                        aria-labelledby="product-tab-4"
                                    >
                                        <div className="single-img">
                                            <a href="img/products/04.jpg">
                                                <img
                                                    src="img/products/04.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                    width={368}
                                                    height={478}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div
                                        className="tab-pane"
                                        id="product-5"
                                        role="tabpanel"
                                        aria-labelledby="product-tab-5"
                                    >
                                        <div className="single-img">
                                            <a href="img/products/05.jpg">
                                                <img
                                                    src="img/products/05.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                    width={368}
                                                    height={478}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="small-image-list float-left w-100">
                                    <div
                                        className="nav-add small-image-slider-single-product-tabstyle-3 owl-carousel"
                                        role="tablist"
                                    >
                                        <div className="single-small-image img-full">
                                            <a
                                                data-toggle="tab"
                                                id="product-tab-1"
                                                href="#product-1"
                                                className="img active"
                                            >
                                                <img src="img/products/01.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-small-image img-full">
                                            <a data-toggle="tab" id="product-tab-2" href="#product-2" className="img">
                                                <img src="img/products/02.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-small-image img-full">
                                            <a data-toggle="tab" id="product-tab-3" href="#product-3" className="img">
                                                <img src="img/products/03.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-small-image img-full">
                                            <a data-toggle="tab" id="product-tab-4" href="#product-4" className="img">
                                                <img src="img/products/04.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                        <div className="single-small-image img-full">
                                            <a data-toggle="tab" id="product-tab-5" href="#product-5" className="img">
                                                <img src="img/products/05.jpg" className="img-fluid" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 product_content">
                                <h4 className="product-title text-capitalize">Printed Polo Collar T-shirt</h4>
                                <div className="rating">
                                    <div className="product-ratings d-inline-block align-middle">
                                        <span className="fa fa-stack">
                                            <i className="material-icons">star</i>
                                        </span>
                                        <span className="fa fa-stack">
                                            <i className="material-icons">star</i>
                                        </span>
                                        <span className="fa fa-stack">
                                            <i className="material-icons">star</i>
                                        </span>
                                        <span className="fa fa-stack">
                                            <i className="material-icons off">star</i>
                                        </span>
                                        <span className="fa fa-stack">
                                            <i className="material-icons off">star</i>
                                        </span>
                                    </div>
                                </div>
                                <span className="description float-left w-100">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </span>
                                <h3 className="price float-left w-100">
                                    <span className="regular-price align-middle">$75.00</span>
                                    <span className="old-price align-middle">$60.00</span>
                                </h3>
                                <div className="product-variants float-left w-100">
                                    <div className="col-md-4 col-sm-6 col-xs-12 size-options d-flex align-items-center">
                                        <h5>Size:</h5>
                                        <select className="form-control" name="select">
                                            <option value="DEFAULT">Size</option>
                                            <option value="black">Medium</option>
                                            <option value="white">Large</option>
                                            <option value="gold">Small</option>
                                            <option value="rose gold">Extra large</option>
                                        </select>
                                    </div>
                                    <div className="color-option d-flex align-items-center">
                                        <h5>color :</h5>
                                        <ul className="color-categories">
                                            <li className="active">
                                                <a className="tt-pink" href="#" title="Pink" />
                                            </li>
                                            <li>
                                                <a className="tt-blue" href="#" title="Blue" />
                                            </li>
                                            <li>
                                                <a className="tt-yellow" href="#" title="Yellow" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="btn-cart d-flex align-items-center float-left w-100">
                                    <h5>qty:</h5>
                                    <input defaultValue={1} type="number" />
                                    <button type="button" className="btn btn-primary">
                                        <i className="material-icons">shopping_cart</i> Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductViewModal;
