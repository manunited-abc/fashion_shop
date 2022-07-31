import { duration } from '@material-ui/core';
import { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import { setLogin } from '../../../store/action';
import reducer from '../../../store/reducer';
import { selectCarts, selectUser } from '../../../store/userSlice';
import CartPopModal from '../../CartPopModal';
import CompareModal from '../../CompareModal';
import LoginModal from '../../LoginModal';
import ProductViewModal from '../../ProductViewModal';
import RegisterModal from '../../RegisterModal';
import { logout } from '../../../store/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import './header.scss';
import Search from '../../Search';
import { setCarts, setVouchers } from '../../../store/userSlice';
import ToastMessage from '../../ToastMessage';
import { useEffect } from 'react';
import Waring from '../../Warning';
function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const carts = useSelector(selectCarts);
    const userLocal = JSON.parse(localStorage.getItem('user'));
    const map = new Map();
    const mapQuantity = new Map();
    const cartMap = [];
    let totalPrice = 0;
    carts.forEach((cart) => {
        if (mapQuantity.has(cart.id)) {
            mapQuantity.set(cart.id, mapQuantity.get(cart.id) + 1);
            map.set(cart.id, cart);
        } else {
            mapQuantity.set(cart.id, 1);
            map.set(cart.id, cart);
        }
        totalPrice += cart.price;
    });
    mapQuantity.forEach((value, key) => {
        cartMap.push([value, key]);
    });
    console.log(map);

    setTimeout(setTimeRemoveUser, 180000);
    function setTimeRemoveUser() {
        localStorage.removeItem('user');
        localStorage.removeItem('vouchers');
    }

    const handleLogouts = (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('vouchers');
        window.location.reload();
        dispatch(logout());
    };
    return (
        <header className="header-area header-sticky text-center header-default">
            <div className="header-main-sticky">
                <div className="header-main-head">
                    <div className="header-main">
                        <div className="container">
                            <div className="header-left float-left d-flex d-lg-flex d-md-block d-xs-block">
                                <Search />
                            </div>
                            <div className="header-middle float-lg-left float-md-left float-sm-left float-xs-none">
                                <div className="logo">
                                    <a href="/">
                                        <img src="/img/logos/logo.png" alt="logo" width={200} height={50} />
                                    </a>
                                </div>
                            </div>
                            <div className="header-right d-flex d-xs-flex d-sm-flex justify-content-end float-right">
                                <div className="user-info" style={{ width: 0 }}></div>
                                <div className="user-info" style={{ width: 0 }}></div>
                                <div className="cart-wrapper">
                                    <button type="button" className="btn">
                                        <i className="material-icons">shopping_cart</i>
                                        <span className="ttcount">{carts.length == 0 ? 0 : carts.length}</span>{' '}
                                    </button>
                                    <div id="cart-dropdown" className="cart-menu">
                                        <ul className="w-100 float-left">
                                            <li id="list-cart">
                                                <table className="table table-striped">
                                                    <tbody>
                                                        {cartMap.map((item) => (
                                                            <tr key={item[1]}>
                                                                <td className="text-center">
                                                                    <a href="#">
                                                                        <img
                                                                            src={`/img/products/${
                                                                                map.get(item[1]).images[0]
                                                                            }`}
                                                                            alt={1}
                                                                            title={1}
                                                                            height={104}
                                                                            width={80}
                                                                        />
                                                                    </a>
                                                                </td>
                                                                <td className="text-left product-name">
                                                                    <a href={`/products/${item[1]}`}>
                                                                        {map.get(item[1]).name}
                                                                    </a>
                                                                    <a href="#"> </a>
                                                                    <div className="quantity float-left w-100">
                                                                        <span className="cart-qty">{item[0]} × </span>
                                                                        <span className="text-left price">
                                                                            {new Intl.NumberFormat('vn-VN', {
                                                                                style: 'currency',
                                                                                currency: 'VND',
                                                                            }).format(map.get(item[1]).price)}{' '}
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="text-center close">
                                                                    <a className="close-cart">
                                                                        <i className="material-icons">close</i>
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <table className="table price mb-30">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-left">
                                                                <strong>Tổng cộng</strong>
                                                            </td>
                                                            <td className="text-right">
                                                                <strong>
                                                                    {new Intl.NumberFormat('vn-VN', {
                                                                        style: 'currency',
                                                                        currency: 'VND',
                                                                    }).format(totalPrice)}{' '}
                                                                </strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li className="buttons w-100 float-left">
                                                <div className="cart-button">
                                                    <a
                                                        className="btn pull-left mt_10 btn-primary btn-rounded w-100"
                                                        href="cart"
                                                    >
                                                        Giỏ hàng
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {user ? (
                                    <div className="infor-user">
                                        <div
                                            style={{ cursor: 'pointer', marginBottom: '12px' }}
                                            onClick={(e) => {
                                                document.querySelector('#user-dropdown').classList.toggle('show-user');
                                            }}
                                        >
                                            <i className="material-icons avatar-user">account_circle</i>
                                        </div>
                                        <div id="user-dropdown" className="user-menu">
                                            <ul>
                                                <li>
                                                    <a className="text-capitalize">Thông tin tài khoản</a>
                                                </li>
                                                <li>
                                                    <a href="../history-order" className="text-capitalize">
                                                        Lịch sử đơn hàng
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        href=""
                                                        className="text-capitalize"
                                                        onClick={(e) => {
                                                            handleLogouts(e);
                                                        }}
                                                    >
                                                        Đăng xuất
                                                    </a>
                                                </li>
                                            </ul>
                                            <div className="name-user">
                                                <span>{userLocal.name}</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="register-login">
                                        <a
                                            href="#"
                                            className="modal-view button"
                                            data-toggle="modal"
                                            data-target="#modalRegisterForm"
                                        >
                                            Đăng ký /
                                        </a>
                                        <a
                                            href="#"
                                            id="btn-login-form"
                                            className="modal-view button"
                                            data-toggle="modal"
                                            data-target="#modalLoginForm"
                                        >
                                            Đăng nhập
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="menu">
                        <div className="container">
                            {/* Navbar */}
                            <nav className="navbar navbar-expand-lg navbar-light d-sm-none d-xs-none d-lg-block navbar-full">
                                {/* Navbar brand */}
                                <a className="navbar-brand text-uppercase d-none" href="#">
                                    Navbar
                                </a>
                                {/* Collapse button */}
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent2"
                                    aria-controls="navbarSupportedContent2"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon" />
                                </button>
                                {/* Collapsible content */}
                                <div className="collapse navbar-collapse">
                                    {/* Links */}
                                    <ul className="navbar-nav m-auto justify-content-center">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-uppercase" href="/man">
                                                Nam
                                            </a>
                                            <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                                                <div className="sub-menu">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a className="menu-item pl-0" href="about-us.html">
                                                                About us{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="accordions.html">
                                                                Accordions{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="buttons.html">
                                                                Buttons{' '}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a href="/woman" className="nav-link text-uppercase">
                                                Nữ
                                            </a>
                                            <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                                                <div className="sub-menu">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a className="menu-item pl-0" href="about-us.html">
                                                                About us{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="accordions.html">
                                                                Accordions{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="buttons.html">
                                                                Buttons{' '}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <Link to="/shop">Shop</Link> */}
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-uppercase" href="category.html">
                                                Trẻ em
                                            </a>

                                            <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                                                <div className="sub-menu">
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a className="menu-item pl-0" href="about-us.html">
                                                                About us{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="accordions.html">
                                                                Accordions{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="buttons.html">
                                                                Buttons{' '}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-uppercase" href="category.html">
                                                Blog
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-uppercase" href="contact-us.html">
                                                Liên lạc
                                            </a>
                                        </li>
                                    </ul>
                                    {/* Links */}
                                </div>
                                {/* Collapsible content */}
                            </nav>
                            {/* Navbar */}
                            <nav className="navbar navbar-expand-lg navbar-light d-lg-none navbar-responsive">
                                {/* Navbar brand */}
                                <a className="navbar-brand text-uppercase d-none" href="#">
                                    Navbar
                                </a>
                                {/* Collapse button */}
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#navbarSupportedContent2"
                                    aria-controls="navbarSupportedContent2"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation"
                                >
                                    <span className="navbar-toggler-icon">
                                        <i className="material-icons">sort</i>
                                    </span>
                                </button>
                                {/* Collapsible content */}
                                <div className="collapse navbar-collapse" id="navbarSupportedContent2">
                                    {/* Links */}
                                    <ul className="navbar-nav m-auto justify-content-center">
                                        {/* Features */}
                                        <li className="nav-item dropdown mega-dropdown">
                                            <a
                                                className="nav-link dropdown-toggle text-uppercase"
                                                data-toggle="collapse"
                                                data-target="#menu3"
                                                aria-controls="menu3"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                                href="#"
                                            >
                                                Nam
                                            </a>
                                            <div
                                                className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                                                id="menu3"
                                            >
                                                <div className="sub-menu">
                                                    <h6 className="sub-title text-uppercase font-weight-bold white-text d-none">
                                                        Featured
                                                    </h6>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a className="menu-item pl-0" href="about-us.html">
                                                                About us{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="accordions.html">
                                                                Accordions{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="buttons.html">
                                                                Buttons{' '}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item  dropdown">
                                            <a
                                                href="/woman"
                                                className="nav-link  dropdown-toggle text-uppercase"
                                                data-toggle="collapse"
                                                data-target="#menu4"
                                                aria-controls="menu4"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                            >
                                                Nữ
                                            </a>
                                            <div
                                                className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                                                id="menu4"
                                            >
                                                <div className="sub-menu">
                                                    <h6 className="sub-title text-uppercase font-weight-bold white-text d-none">
                                                        Featured
                                                    </h6>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a className="menu-item pl-0" href="about-us.html">
                                                                About us{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="accordions.html">
                                                                Accordions{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="buttons.html">
                                                                Buttons{' '}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            {/* <Link to="/shop">Shop</Link> */}
                                        </li>
                                        {/* Technology */}
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle text-uppercase"
                                                data-toggle="collapse"
                                                data-target="#menu5"
                                                aria-controls="menu5"
                                                aria-expanded="false"
                                                aria-label="Toggle navigation"
                                                href="#"
                                            >
                                                Trẻ em
                                            </a>
                                            <div
                                                className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                                                id="menu5"
                                            >
                                                <div className="sub-menu">
                                                    <h6 className="sub-title text-uppercase font-weight-bold white-text d-none">
                                                        Featured
                                                    </h6>
                                                    <ul className="list-unstyled">
                                                        <li>
                                                            <a className="menu-item pl-0" href="about-us.html">
                                                                About us{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="accordions.html">
                                                                Accordions{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a className="menu-item pl-0" href="buttons.html">
                                                                Buttons{' '}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link  text-uppercase">Blog</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link text-uppercase" href="contact-us.html">
                                                Liên lạc
                                            </a>
                                        </li>
                                    </ul>
                                    {/* Links */}
                                </div>
                                {/* Collapsible content */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <LoginModal />
            <RegisterModal />
            <ProductViewModal />
            <CartPopModal />
            <CompareModal />
            <ToastMessage />
            <Waring name="login-success" message="Bạn đã đăng nhập thành công" />
            <Waring name="register-success" message="Bạn đã đăng ký thành công thành công" />
            <button
                id="login-ok-btn"
                data-target="#login-success"
                data-toggle="modal"
                style={{ display: 'none' }}
            ></button>
            <button
                id="register-ok-btn"
                data-target="#register-success"
                data-toggle="modal"
                style={{ display: 'none' }}
            ></button>
        </header>
    );
}
export default Header;
