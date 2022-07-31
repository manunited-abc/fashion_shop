import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCarts } from '../../store/userSlice';
function GridFadeProduct(props) {
    const dispatch = useDispatch();
    return (
        <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
            <div className="product-thumb" key={props.id}>
                <div className="image zoom">
                    <a href={`/products/${props.id}`}>
                        <img src={'img/products/' + props.images[0]} alt={1} />
                        <img src={'img/products/' + props.images[1]} className="second_image img-responsive" />{' '}
                    </a>
                    <ul className="countdown countdown1">
                        <li>
                            <span className="days">00</span>
                            <p className="days_text">Days</p>
                        </li>
                        <li>
                            <span className="hours">00</span>
                            <p className="hours_text">Hours</p>
                        </li>
                        <li>
                            <span className="minutes">00</span>
                            <p className="minutes_text">Minutes</p>
                        </li>
                        <li>
                            <span className="seconds">00</span>
                            <p className="seconds_text">Seconds</p>
                        </li>
                    </ul>
                </div>
                <div className="thumb-description">
                    <div className="caption">
                        <h4 className="product-title text-capitalize">
                            <a href={`/products/${props.id}`}>{props.name}</a>
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
                        <div className="regular-price">
                            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(props.price)}{' '}
                        </div>
                        {/* <div className="old-price">$150.00</div> */}
                    </div>
                    <div className="button-wrapper">
                        <div className="button-group text-center">
                            <button
                                type="button"
                                className="btn btn-primary btn-cart"
                                data-target="#cart-pop"
                                data-toggle="modal"
                                onClick={(e) => {
                                    const product = {
                                        id: props.id,
                                        name: props.name,
                                        description: props.description,
                                        images: props.images,
                                        price: props.price,
                                        size: 'S',
                                    };
                                    let carts = [];

                                    if (localStorage.getItem('carts')) {
                                        carts = JSON.parse(localStorage.getItem('carts'));
                                    }
                                    carts.push(product);
                                    localStorage.setItem('carts', JSON.stringify(carts));
                                    dispatch(setCarts(carts));
                                }}
                            >
                                <i className="material-icons">shopping_cart</i>
                                <span>Out of stock</span>
                            </button>
                            <a href="wishlist.html" className="btn btn-primary btn-wishlist">
                                <i className="material-icons">favorite</i>
                                <span>wishlist</span>
                            </a>
                            <button type="button" className="btn btn-primary btn-compare">
                                <i className="material-icons">equalizer</i>
                                <span>Compare</span>
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary btn-quickview"
                                data-toggle="modal"
                                data-target="#product_view"
                            >
                                <i className="material-icons">visibility</i>
                                <span>Quick View</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default GridFadeProduct;
