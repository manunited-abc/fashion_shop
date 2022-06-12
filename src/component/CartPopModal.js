function CartPopModal() {
    return (
        <div className="modal fade" id="cart-pop" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header alert-success">
                        <h4 className="modal-title w-100w-100w-100">
                            Product successfully added to your shopping cart
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-6 divide-right">
                                <div className="row">
                                    <div className="col-md-5 col-sm-4 col-xs-12 product-img float-left">
                                        <img src="img/products/01.jpg" className="img-responsive" alt={1} />
                                    </div>
                                    <div className="col-md-7 col-sm-8 col-xs-12 product-desc float-left">
                                        <h4 className="product-title text-capitalize">Burgundy Small Dress</h4>
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
                                        <h3 className="price float-left w-100">
                                            <span className="regular-price align-middle">$75.00</span>
                                            <span className="old-price align-middle">$60.00</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 divide-left">
                                <p className="cart-products-count">There are 2 items in your cart.</p>
                                <p className="total-products float-left w-100">
                                    <strong>Total products:</strong> $150.00
                                </p>
                                <p className="shipping float-left w-100">
                                    <strong>Total shipping:</strong> free
                                </p>
                                <p className="total-price float-left w-100">
                                    <strong>Total:</strong> $150.00(tax incl.)
                                </p>
                                <div className="cart-content-btn float-left w-100">
                                    <form action="#">
                                        <input
                                            className="btn pull-right mt_10 btn-primary"
                                            defaultValue={'Continue shopping'}
                                            type="submit"
                                        />
                                    </form>
                                    <form action="checkout_page.html">
                                        <input
                                            className="btn pull-right mt_10 btn-secondary"
                                            defaultValue={'Proceed to checkout'}
                                            type="submit"
                                        />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPopModal;
