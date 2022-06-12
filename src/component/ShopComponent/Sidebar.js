import SliderRange from "../SlideRange";

function Sidebar() {
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
                Categories
              </a>
            </h3>
            <div id="categoriesMenu" className="expand-lg collapse show">
              <div className="nav nav-pills flex-column mt-4">
                {" "}
                <a
                  href="#"
                  className="nav-link d-flex justify-content-between mb-2 "
                >
                  <span>Jackets</span>
                  <span className="sidebar-badge"> 120</span>
                </a>
                <div className="nav nav-pills flex-column ml-3">
                  <a href="#" className="nav-link mb-2">
                    Lorem ipsum
                  </a>
                  <a href="#" className="nav-link mb-2">
                    Donec vitae
                  </a>
                </div>
                <a
                  href="#"
                  className="nav-link d-flex justify-content-between mb-2 active"
                >
                  <span>Jeans &amp; chinos</span>
                  <span className="sidebar-badge"> 55</span>
                </a>
                <div className="nav nav-pills flex-column ml-3">
                  <a href="#" className="nav-link mb-2">
                    Dolor
                  </a>
                  <a href="#" className="nav-link mb-2">
                    Sit amet
                  </a>
                </div>
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
                  style={{ border: 0, fontWeight: "bold", background: "none" }}
                />
                {/* <div id="slider-range" >
                  
                </div> */}
                <SliderRange/>
              </div>
            </div>
          </div>
          <div className="sidebar-block color">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#color"
                role="button"
                aria-expanded="true"
                aria-controls="color"
              >
                Color
              </a>
            </h3>
            <div
              id="color"
              className="sidebar-widget-option-wrapper collapse show"
            >
              <div className="color-inner">
                <div className="sidebar-widget-option">
                  <a href="#" style={{ backgroundColor: "#000000" }} />
                  Black <span>(4)</span>
                </div>
                <div className="sidebar-widget-option">
                  <a href="#" style={{ backgroundColor: "#11426b" }} />
                  Blue <span>(3)</span>
                </div>
                <div className="sidebar-widget-option">
                  <a href="#" style={{ backgroundColor: "#7d5a3c" }} />
                  Brown <span>(3)</span>
                </div>
                <div className="sidebar-widget-option">
                  <a href="#" style={{ backgroundColor: "#ffffff" }} />
                  White <span>(3)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-block size">
            <h3 className="widget-title">
              <a
                data-toggle="collapse"
                href="#size"
                role="button"
                aria-expanded="true"
                aria-controls="size"
              >
                Size
              </a>
            </h3>
            <div
              id="size"
              className="sidebar-widget-option-wrapper collapse show"
            >
              <div className="size-inner">
                <div className="sidebar-widget-option">
                  <input type="checkbox" id="size-1" />
                  <label htmlFor="size-1">
                    L <span>(4)</span>
                  </label>
                </div>
                <div className="sidebar-widget-option">
                  <input type="checkbox" id="size-2" />
                  <label htmlFor="size-2">
                    XS <span>(3)</span>
                  </label>
                </div>
                <div className="sidebar-widget-option">
                  <input type="checkbox" id="size-3" />
                  <label htmlFor="size-3">
                    S <span>(3)</span>
                  </label>
                </div>
                <div className="sidebar-widget-option">
                  <input type="checkbox" id="size-4" />
                  <label htmlFor="size-4">
                    Xl <span>(3)</span>
                  </label>
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
        <div id="sidebar-product" className="collapse w-100 float-left">
          <div className="sidebar-block sale ">
            <h3 className="widget-title text-capitalize">sale products</h3>
            <div className="products owl-carousel">
              <div className="sale-col">
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image col-sm-4 float-left">
                      <a href="#">
                        <img src="img/products/01.jpg" alt={1} />{" "}
                      </a>
                    </div>
                    <div className="thumb-description col-sm-8 text-left float-left">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            aliquam quaerat voluptatem
                          </a>
                        </h4>
                      </div>
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
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image col-sm-4 float-left">
                      <a href="#">
                        <img src="img/products/02.jpg" alt={1} />{" "}
                      </a>
                    </div>
                    <div className="thumb-description col-sm-8 text-left float-left">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            aspetur autodit autfugit
                          </a>
                        </h4>
                      </div>
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
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image col-sm-4 float-left">
                      <a href="#">
                        <img src="img/products/03.jpg" alt={3} />{" "}
                      </a>
                    </div>
                    <div className="thumb-description col-sm-8 text-left float-left">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            magni dolores eosquies
                          </a>
                        </h4>
                      </div>
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
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sale-col">
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image col-sm-4 float-left">
                      <a href="#">
                        <img src="img/products/04.jpg" alt={4} />{" "}
                      </a>
                    </div>
                    <div className="thumb-description col-sm-8 text-left float-left">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            voluptas nulla pariatur
                          </a>
                        </h4>
                      </div>
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
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image col-sm-4 float-left">
                      <a href="#">
                        <img src="img/products/05.jpg" alt={5} />{" "}
                      </a>
                    </div>
                    <div className="thumb-description col-sm-8 text-left float-left">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            aliquam quat voluptatem
                          </a>
                        </h4>
                      </div>
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
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
