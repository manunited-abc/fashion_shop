import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectUser } from '../../../store/userSlice';

function OrderDetail() {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const [orderDetails, setOrderDetails] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + user.token);
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost:8080/api/order?id=' + id, {
            method: 'GET',
            headers: myHeaders,
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setOrder(data);
                setOrderDetails(data.orderDetails);
            });
    }, []);
    return (
        <div className="order-inner float-left w-100">
            <div className="container">
                <div className="row">
                    <div id="order-itens" className="card float-left w-100 mb-10">
                        <div className="card-block p-20">
                            <h3 className="card-title">Chi tiết đơn hàng</h3>
                            <div className="order-confirmation-table float-left w-100">
                                {orderDetails.map((item) => (
                                    <div key={item.id}>
                                        <div className="order-line float-left w-100">
                                            <div className="row">
                                                <div className="col-sm-1 col-xs-3 float-left">
                                                    <img src={`../img/products/${item.product.images[0]}`} alt="" />
                                                </div>
                                                <div className="col-sm-5 col-xs-9 details float-left">
                                                    <a href={'../products/' + item.product.id}>{item.product.name}</a>
                                                </div>
                                                <div className="col-sm-6 col-xs-12 qty float-left d-flex">
                                                    <div className="col-xs-5 col-sm-5 text-sm-right text-xs-left">
                                                        {new Intl.NumberFormat('vn-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(item.product.price)}
                                                    </div>
                                                    <div className="col-xs-2 col-sm-2">{item.quantity}</div>
                                                    <div className="col-xs-5 col-sm-5 text-sm-right bold">
                                                        {' '}
                                                        {new Intl.NumberFormat('vn-VN', {
                                                            style: 'currency',
                                                            currency: 'VND',
                                                        }).format(item.product.price * item.quantity)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="float-left w-100" />
                                    </div>
                                ))}

                                <table className="float-left w-100 mb-30">
                                    <tbody>
                                        <tr className="mb-10">
                                            <td>Ngày đặt</td>
                                            <td className="text-right">
                                                {new Date(order.createDate).toLocaleString('vn-VN')}
                                            </td>
                                        </tr>
                                        <tr className="mb-10">
                                            <td>Địa chỉ</td>
                                            <td className="text-right">{order.address}</td>
                                        </tr>
                                        <tr className="mb-10">
                                            <td>SĐT</td>
                                            <td className="text-right">{order.phoneNum}</td>
                                        </tr>
                                        <tr className="mb-10">
                                            <td>Tên người nhận</td>
                                            <td className="text-right">{order.name}</td>
                                        </tr>
                                        <tr className="mb-10">
                                            <td>Tổng đơn hàng</td>
                                            <td className="text-right">
                                                {' '}
                                                {new Intl.NumberFormat('vn-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(order.totalBill)}
                                            </td>
                                        </tr>
                                        <tr className="mb-10">
                                            <td>Giảm giá</td>
                                            <td className="text-right">
                                                {' '}
                                                -{' '}
                                                {new Intl.NumberFormat('vn-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(order.discountVoucher)}
                                            </td>
                                        </tr>
                                        <tr className="font-weight-bold">
                                            <td>
                                                <span className="text-uppercase">Thành tiền</span>
                                            </td>
                                            <td className="text-right">
                                                {' '}
                                                {new Intl.NumberFormat('vn-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(order.totalBill - order.discountVoucher)}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderDetail;
