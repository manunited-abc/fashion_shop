function Waring(props) {
    return (
        <div className="modal fade" id={props.name} tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header alert-danger">
                        <h4 className="modal-title w-100w-100w-100">{props.message}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="cart-content-btn float-left w-100">
                            <button
                                className="btn pull-right mt_10 btn-primary "
                                onClick={(e) => {
                                    document.querySelector('.modal-header.alert-danger button').click();
                                }}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Waring;
