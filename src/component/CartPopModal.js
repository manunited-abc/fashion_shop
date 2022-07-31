function CartPopModal() {
    return (
        <div className="modal fade" id="cart-pop" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header alert-success">
                        <h4 className="modal-title w-100w-100w-100">Thêm giỏ hàng thành công</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="cart-content-btn float-left w-100">
                            <button
                                className="btn pull-right mt_10 btn-primary "
                                onClick={(e) => {
                                    document.querySelector('.modal-header.alert-success button').click();
                                }}
                            >
                                Mua sắm tiếp
                            </button>
                            <button
                                className="btn pull-right mt_10 btn-primary"
                                onClick={(e) => {
                                    window.location.href = '/cart';
                                }}
                            >
                                Tới giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CartPopModal;
