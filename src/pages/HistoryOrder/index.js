import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectOrder, selectUser } from '../../store/userSlice';

function HistoryOrder() {
    const [orders, setOrders] = useState([]);
    const user = useSelector(selectUser);
    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + user.token);
        myHeaders.append('Content-Type', 'application/json');
        fetch('http://localhost:8080/api/order/' + user.id, {
            method: 'GET',
            headers: myHeaders,
        })
            .then((res) => res.json())
            .then((data) => {
                setOrders(data);
            });
    }, []);
    return (
        <div className="container mt-5">
            <div className="row tm-content-row">
                <div
                    className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col"
                    style={{ maxWidth: '100%', flex: '0 0 100%' }}
                >
                    <div className="tm-bg-primary-dark tm-block tm-block-products">
                        <div className="tm-product-table-container">
                            <table className="table table-hover tm-table-small tm-product-table">
                                <thead>
                                    <tr>
                                        <th scope="col">Mã đơn</th>
                                        <th scope="col">Ngày đặt</th>
                                        <th scope="col">Địa chỉ</th>
                                        <th scope="col">SĐT</th>
                                        <th scope="col">Tên người nhận</th>
                                        <th scope="col">Tổng đơn hàng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((item) => (
                                        <tr
                                            key={item.id}
                                            style={{ cursor: 'pointer' }}
                                            onClick={(e) => {
                                                window.location.href = '/history-order/' + item.id;
                                            }}
                                        >
                                            <td>{item.id}</td>
                                            <td className="tm-product-name">
                                                {new Date(item.createDate).toLocaleString('vn-VN')}
                                            </td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNum}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                {' '}
                                                {new Intl.NumberFormat('vn-VN', {
                                                    style: 'currency',
                                                    currency: 'VND',
                                                }).format(item.totalBill)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* table container */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HistoryOrder;
