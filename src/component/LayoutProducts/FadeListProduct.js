function FadeListProduct(props){
    return(
        <div className="product-layouts">
        <div className="product-thumb row">
          <div className="image zoom col-xs-12 col-sm-5 col-md-4">
            <a href="product-details.html" className="d-block position-relative">
              <img src="img/products/01.jpg" alt={1} />
              <img src="img/products/02.jpg" alt={2} className="second_image img-responsive" />
            </a>
            <ul className="countdown countdown4 text-center">
              <li><span className="days">00</span>
                <p className="days_text">Days</p>
              </li>
              <li><span className="hours">00</span>
                <p className="hours_text">Hours</p>
              </li>
              <li><span className="minutes">00</span>
                <p className="minutes_text">Minutes</p>
              </li>
              <li><span className="seconds">00</span>
                <p className="seconds_text">Seconds</p>
              </li>
            </ul>
          </div>
          <div className="thumb-description col-xs-12 col-sm-7 col-md-8 position-static text-left">
            <div className="caption">
              <h4 className="product-title text-capitalize"><a href="product-details.html">aliquam quaerat voluptatem</a></h4>
            </div>
            <div className="rating mb-10">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rhoncus arcu
              turpis, quis sagittis orci dictum non. Etiam id eleifend erat. Donec sit
              amet nisl id nisi laoreet viverra in ac nibh. </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="color-option d-flex align-items-center float-left w-100">
              <ul className="color-categories">
                <li>
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
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal" disabled="disabled"><i className="material-icons">shopping_cart</i><span>out of
                    stock</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default FadeListProduct