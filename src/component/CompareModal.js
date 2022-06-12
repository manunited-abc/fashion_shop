function CompareModal() {
    return (
        <div className="compare-wrapper float-left w-100">
            <div className="compare-inner d-flex align-items-center p-20">
                <span className="close">
                    <i className="material-icons">close</i>
                </span>
                <div className="col-xs-12 col-sm-2 col-md-3 float-left d-flex align-items-center flex-column compare-left">
                    <h2>compare products</h2>
                    <div className="compare-btn">show all</div>
                </div>
                <div className="col-xs-12 col-sm-10 col-md-9 d-flex float-left align-items-center compare-right">
                    <div className="compare-close-btn" />
                    <div className="compare-products d-flex col-sm-7 col-lg-5">
                        <div className="row">
                            <div className="single-item col-sm-4 col-xs-4">
                                <div className="remove" />
                                <div className="image">
                                    <img src="img/products/01.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="single-item col-sm-4 col-xs-4">
                                <div className="remove" />
                                <div className="image">
                                    <img src="img/products/02.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                            <div className="single-item col-sm-4 col-xs-4">
                                <div className="remove" />
                                <div className="image">
                                    <img src="img/products/03.jpg" className="img-fluid" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="buttons col-sm-5 col-lg-2">
                        <a href="compare.html" className="compare-btn btn btn-secondary float-left w-100 mb-15">
                            compare
                        </a>
                        <div className="clear-btn btn btn-primary float-left w-100">clear</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CompareModal;
