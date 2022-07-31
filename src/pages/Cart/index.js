import { useDispatch, useSelector } from 'react-redux';
import { selectVouchers, setCarts, setVouchers, setOrder } from '../../store/userSlice';
import { selectCarts, selectUser } from '../../store/userSlice';
import { useEffect, useState } from 'react';
import Waring from '../../component/Warning';
function Cart() {
    const dispatch = useDispatch();
    const carts = useSelector(selectCarts);
    const user = useSelector(selectUser);
    const vouchers = useSelector(selectVouchers);
    let size = 'S';
    //const [vouchers, setVouchers] = useState([]);
    const [code, setCode] = useState('');
    const [voucher, setVoucher] = useState({});
    let order = {};
    const mapSize = new Map();
    const map = new Map();
    const mapQuantity = new Map();
    const cartMap = [];
    const sizes = [];
    let totalPrice = 0;
    carts.forEach((cart) => {
        if (mapQuantity.has(cart.id)) {
            mapQuantity.set(cart.id, mapQuantity.get(cart.id) + 1);
            map.set(cart.id, cart);
        } else {
            mapQuantity.set(cart.id, 1);
            map.set(cart.id, cart);
        }
        mapSize.set(cart.id, cart.size);
        totalPrice += cart.price;
    });
    mapQuantity.forEach((value, key) => {
        cartMap.push([value, key]);
    });

    return (
        <div>
            <nav aria-label="breadcrumb" className="w-100 float-left">
                <ol
                    className="breadcrumb parallax justify-content-center"
                    data-source-url="img/banner/parallax.jpg"
                    style={{ backgroundImage: 'url("img/banner/parallax.jpg")', backgroundPosition: '50% 0.809717%' }}
                >
                    <li className="breadcrumb-item">
                        <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        cart
                    </li>
                </ol>
            </nav>
            <div className="cart-area table-area pt-110 pb-95 float-left w-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 col-sm-12 float-left cart-wrapper">
                            <div className="table-responsive">
                                <button
                                    style={{ display: 'none' }}
                                    id="btn-waring"
                                    data-target="#toast-message"
                                    data-toggle="modal"
                                >
                                    Cảnh báo
                                </button>

                                <table className="table product-table text-center">
                                    <thead>
                                        <tr>
                                            <th className="table-remove text-capitalize">Xóa</th>
                                            <th className="table-image text-capitalize">Ảnh</th>
                                            <th className="table-p-name text-capitalize">Tên</th>
                                            <th className="table-p-price text-capitalize">Giá</th>
                                            <th className="table-p-price text-capitalize">SL</th>
                                            <th className="table-p-qty text-capitalize">Size</th>
                                            <th className="table-total text-capitalize">Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartMap.map((item) => (
                                            <tr key={item[1]}>
                                                <td className="table-remove">
                                                    <button
                                                        onClick={(e) => {
                                                            let storageProducts = JSON.parse(
                                                                localStorage.getItem('carts'),
                                                            );
                                                            let products = storageProducts.filter(
                                                                (product) => product.id !== item[1],
                                                            );
                                                            localStorage.setItem('carts', JSON.stringify(products));
                                                            dispatch(setCarts(products));
                                                        }}
                                                    >
                                                        <i className="material-icons">delete</i>
                                                    </button>
                                                </td>
                                                <td className="table-image">
                                                    <a href={`/products/${item[1]}`}>
                                                        <img
                                                            src={`/img/products/${map.get(item[1]).images[0]}`}
                                                            alt=""
                                                        />
                                                    </a>
                                                </td>
                                                <td className="table-p-name text-capitalize">
                                                    <a href={`/products/${item[1]}`}>{map.get(item[1]).name}</a>
                                                </td>
                                                <td className="table-p-price">
                                                    <p>
                                                        {' '}
                                                        {new Intl.NumberFormat('vn-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(map.get(item[1]).price)}{' '}
                                                    </p>
                                                </td>
                                                <td className="table-p-qty">
                                                    <input
                                                        defaultValue={item[0]}
                                                        max={10}
                                                        min={1}
                                                        name="cart-qty"
                                                        type="number"
                                                        onKeyDown={(e) => {
                                                            return false;
                                                        }}
                                                        onBlur={(e) => {
                                                            const quantityNew = e.target.value;
                                                            const quantityOld = e.target.defaultValue;

                                                            if (!(quantityNew >= 1 && quantityNew <= 10)) {
                                                                document.getElementById('btn-waring').click();
                                                                e.target.value = quantityOld;
                                                            } else {
                                                                let difference = quantityNew - quantityOld;
                                                                let carts = [];
                                                                if (localStorage.getItem('carts')) {
                                                                    carts = JSON.parse(localStorage.getItem('carts'));
                                                                }
                                                                if (difference > 0) {
                                                                    for (var i = 0; i < difference; i++) {
                                                                        const product = {
                                                                            id: map.get(item[1]).id,
                                                                            name: map.get(item[1]).name,
                                                                            description: map.get(item[1]).description,
                                                                            images: map.get(item[1]).images,
                                                                            price: map.get(item[1]).price,
                                                                            size: size,
                                                                        };
                                                                        carts.push(product);
                                                                    }
                                                                    localStorage.setItem(
                                                                        'carts',
                                                                        JSON.stringify(carts),
                                                                    );
                                                                    dispatch(setCarts(carts));
                                                                } else {
                                                                    if (difference < 0) {
                                                                        for (var i = 0; i < carts.length; i++) {
                                                                            if (carts[i].id == item[1]) {
                                                                                carts.splice(i, 1);
                                                                                break;
                                                                            }
                                                                        }
                                                                        console.log(carts);
                                                                        localStorage.setItem(
                                                                            'carts',
                                                                            JSON.stringify(carts),
                                                                        );
                                                                        dispatch(setCarts(carts));
                                                                    }
                                                                }
                                                            }
                                                        }}
                                                    />
                                                </td>
                                                <td>
                                                    <select
                                                        className="form-control"
                                                        name="select"
                                                        defaultValue={map.get(item[1]).size}
                                                        style={{ width: '77px' }}
                                                        onChange={(e) => {
                                                            size = e.target.value;
                                                            // mapSize.set(item[1], e.target.value);
                                                            let carts = [];
                                                            if (localStorage.getItem('carts')) {
                                                                carts = JSON.parse(localStorage.getItem('carts'));
                                                            }

                                                            for (var i = 0; i < carts.length; i++) {
                                                                if (carts[i].id == item[1]) {
                                                                    carts.splice(i, 1);
                                                                    break;
                                                                }
                                                            }
                                                            const product = {
                                                                id: item[1],
                                                                name: map.get(item[1]).name,
                                                                description: map.get(item[1]).description,
                                                                images: map.get(item[1]).images,
                                                                price: map.get(item[1]).price,
                                                                size: e.target.value,
                                                            };
                                                            carts.push(product);
                                                            localStorage.setItem('carts', JSON.stringify(carts));
                                                            dispatch(setCarts(carts));
                                                            //console.log(mapSize);
                                                        }}
                                                    >
                                                        <option>S</option>
                                                        <option>M</option>
                                                        <option>L</option>
                                                        <option>XL</option>
                                                        <option>XXL</option>
                                                    </select>
                                                </td>
                                                <td className="table-total">
                                                    <p>
                                                        {' '}
                                                        {new Intl.NumberFormat('vn-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(map.get(item[1]).price * item[0])}{' '}
                                                    </p>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="table-bottom-wrapper">
                                <div className="table-coupon d-flex d-xs-block d-lg-flex d-sm-flex fix justify-content-start float-left">
                                    <input
                                        type="text"
                                        placeholder="Nhập mã"
                                        onChange={(e) => {
                                            setCode(e.target.value);
                                        }}
                                    />
                                    <button
                                        type="submit"
                                        className="btn-primary btn"
                                        onClick={(e) => {
                                            if (user != null) {
                                                var isVoucher = false;
                                                for (var i = 0; i < vouchers.length; i++) {
                                                    if (vouchers[i].code === code) {
                                                        setVoucher(vouchers[i]);
                                                        isVoucher = true;
                                                        break;
                                                    }
                                                }
                                                if (!isVoucher) {
                                                    alert('Mã không hợp lệ');
                                                }
                                            } else {
                                                alert('Bạn chưa đăng nhập');
                                            }
                                        }}
                                    >
                                        Áp dụng voucher
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="table-total-wrapper d-flex justify-content-end pt-60 col-md-12 col-sm-12 col-lg-4 float-left  align-items-center">
                            <div className="table-total-content">
                                <h2 className="pb-20">Tổng hóa đơn</h2>
                                <div className="table-total-amount">
                                    <div className="single-total-content d-flex justify-content-between float-left w-100">
                                        <strong>Tổng giá</strong>
                                        <span className="c-total-price">
                                            {' '}
                                            {new Intl.NumberFormat('vn-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(totalPrice)}{' '}
                                        </span>
                                    </div>
                                    <div className="single-total-content d-flex justify-content-between float-left w-100">
                                        <strong>Giảm giá</strong>

                                        <span>
                                            -{' '}
                                            {new Intl.NumberFormat('vn-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(voucher.discount || 0)}{' '}
                                        </span>
                                    </div>

                                    <div className="single-total-content tt-total d-flex justify-content-between float-left w-100">
                                        <strong>Thành tiền</strong>
                                        <span className="c-total-price">
                                            {' '}
                                            {new Intl.NumberFormat('vn-VN', {
                                                style: 'currency',
                                                currency: 'VND',
                                            }).format(totalPrice - voucher.discount || totalPrice)}{' '}
                                        </span>
                                    </div>
                                    {carts.length > 0 ? (
                                        <a
                                            className="btn btn-primary float-left w-100 text-center"
                                            onClick={(e) => {
                                                let ordersNew = [];
                                                cartMap.forEach((item) => {
                                                    var sizes;
                                                    for (const x of mapSize.keys()) {
                                                        if (x == item[1]) {
                                                            sizes = mapSize.get(x);
                                                            break;
                                                        }
                                                    }
                                                    var orderDetail = {
                                                        product: map.get(item[1]),
                                                        quantity: item[0],
                                                        size: sizes,
                                                    };
                                                    ordersNew.push(orderDetail);
                                                });
                                                console.log(ordersNew);
                                                order = {
                                                    voucher: voucher,
                                                    orderDetails: ordersNew,
                                                    userId: user != null ? user.id : -1,
                                                    totalPrice: totalPrice,
                                                };
                                                localStorage.setItem('order', JSON.stringify(order));
                                                dispatch(setOrder(order));
                                                window.location.href = 'checkout';
                                            }}
                                        >
                                            Thanh toán
                                        </a>
                                    ) : (
                                        <a
                                            className="btn btn-primary float-left w-100 text-center"
                                            onClick={(e) => {
                                                alert('Giỏ hàng rỗng');
                                            }}
                                        >
                                            Thanh toán
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
