import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarts, selectUser, selectOrder } from '../../store/userSlice';
function Checkout() {
    const dispatch = useDispatch();
    const order = useSelector(selectOrder);
    const user = useSelector(selectUser);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const orderDetails = [];
        for (var i of order.orderDetails) {
            const orderDetail = {
                productId: i.product.id,
                quantity: i.quantity,
                size: i.size,
            };
            orderDetails.push(orderDetail);
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                orderDetails: orderDetails,
                voucherId: order.voucher.id,
                userId: user != null ? user.id : -1,
                totalPrice: order.totalPrice,
                address: address,
                phoneNum: phone,
                name: name,
            }),
        };
        fetch('http://localhost:8080/api/order', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
        window.location.href = 'order-confirm';
    };

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
                        checkout
                    </li>
                </ol>
            </nav>
            <div className="checkout-inner float-left w-100">
                <div className="container">
                    <div className="row">
                        <div className="cart-block-left col-md-4 order-md-2 mb-4">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span>Giỏ hàng của bạn</span>
                            </h4>
                            <div className="list-group mb-3">
                                {order.orderDetails.map((item) => (
                                    <div className="list-group-item d-flex justify-content-between lh-condensed">
                                        <div>
                                            <h6 className="my-0">{item.product.name}</h6>
                                        </div>
                                        <span className="text-muted">
                                            {' '}
                                            {new Intl.NumberFormat('vn-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(item.product.price)}{' '}
                                            X {item.quantity}
                                        </span>
                                    </div>
                                ))}

                                <div className="list-group-item d-flex justify-content-between">
                                    <div className="text-success">
                                        <h6 className="my-0">Mã giảm giá</h6>
                                        <small>{order.voucher.code}</small>
                                    </div>
                                    <span className="text-success">
                                        {' '}
                                        -{' '}
                                        {new Intl.NumberFormat('vn-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        }).format(order.voucher.discount || 0)}{' '}
                                    </span>
                                </div>
                                <div className="list-group-item d-flex justify-content-between">
                                    <strong>Tổng hóa đơn</strong>
                                    <strong>
                                        {' '}
                                        {new Intl.NumberFormat('vn-VN', {
                                            style: 'currency',
                                            currency: 'VND',
                                        }).format(order.totalPrice - order.voucher.discount || order.totalPrice)}{' '}
                                    </strong>
                                </div>
                                <div className="list-group-item  justify-content-between">
                                    <div className="custom-control custom-radio" id="checkbox-card">
                                        <input
                                            id="credit"
                                            name="paymentMethod"
                                            type="radio"
                                            className="custom-control-input"
                                            required
                                        />
                                        <label className="custom-control-label" htmlFor="credit">
                                            Thẻ ghi nợ/ATM
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio" id="checkbox-card-debit">
                                        <input
                                            id="debit"
                                            name="paymentMethod"
                                            type="radio"
                                            className="custom-control-input"
                                            required
                                        />
                                        <label className="custom-control-label" htmlFor="debit">
                                            Tiền mặt
                                        </label>
                                    </div>
                                    <div className="custom-control custom-radio" id="checkbox-card-paypal">
                                        <input
                                            id="paypal"
                                            name="paymentMethod"
                                            type="radio"
                                            className="custom-control-input"
                                            required
                                        />
                                        <label className="custom-control-label" htmlFor="paypal">
                                            Ví Momo
                                        </label>
                                    </div>
                                </div>

                                <div id="card-dropdown-paypal">
                                    <div className="list-group-item  justify-content-between">
                                        <div className="image">
                                            <img src="img/logos/paypal.png" />
                                        </div>
                                    </div>
                                </div>
                                <a
                                    className="btn btn-primary btn-lg btn-primary"
                                    onClick={(e) => {
                                        document.getElementById('submit-btn').click();
                                    }}
                                >
                                    Xác nhận đơn hàng
                                </a>
                                {/*<form class="card p-2">
<div class="input-group">
  <input type="text" class="form-control" placeholder="Promo code">
  <div class="input-group-append">
	<button type="submit" class="btn btn-secondary btn-primary">Redeem</button>
  </div>
</div>
</form>*/}
                            </div>
                        </div>
                        <div className="cart-block-right col-md-8 order-md-1">
                            <h4 className="mb-3">Thông tin thanh toán</h4>
                            <form className="needs-validation" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name">
                                        Họ và tên<span className="required">*</span>{' '}
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        defaultValue={user != null ? user.name : name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        Email <span className="text-muted">(Không bắt buộc)</span>
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        defaultValue={user != null ? user.email : email}
                                        placeholder={true}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address">
                                        Địa chỉ<span className="required">*</span>{' '}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="address"
                                        placeholder="1234 Main St"
                                        required
                                        defaultValue={address}
                                        onChange={(e) => {
                                            setAddress(e.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">Please enter your shipping address.</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address">
                                        Số điện thoại<span className="required">*</span>{' '}
                                    </label>
                                    <input
                                        defaultValue={user != null ? user.phone : phone}
                                        type="number"
                                        className="form-control"
                                        id="address"
                                        required
                                        onChange={(e) => {
                                            setPhone(e.target.value);
                                        }}
                                    />
                                    <div className="invalid-feedback">Please enter your shipping address.</div>
                                </div>

                                <hr className="mb-4" />

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="save-info" />
                                    <label className="custom-control-label" htmlFor="save-info">
                                        Save this information for next time
                                    </label>
                                </div>
                                <hr className="mb-4" />
                                <button
                                    id="submit-btn"
                                    className="btn btn-primary"
                                    type="submit"
                                    style={{ display: 'none' }}
                                ></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Checkout;
