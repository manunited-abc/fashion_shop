function OrderConfirm() {
    return (
        <div>
            <nav aria-label="breadcrumb" className="w-100 float-left">
                <ol
                    className="breadcrumb parallax justify-content-center"
                    data-source-url="img/banner/parallax.jpg"
                    style={{ backgroundImage: 'url("img/banner/parallax.jpg")', backgroundPosition: '50% 0.809717%' }}
                >
                    <li className="breadcrumb-item active">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        order-confirmation
                    </li>
                </ol>
            </nav>
            <div className="order-inner float-left w-100">
                <div className="container">
                    <div className="row">
                        <div id="order-confirmation" className="card float-left w-100 mb-10">
                            <div className="card-block p-20">
                                <h3 className="card-title text-success">Your order is confirmed</h3>
                                <p>An email has been sent to your mail address admin7890@gmail.com.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderConfirm;
