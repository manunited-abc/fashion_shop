import { Link } from 'react-router-dom';
import CartPopModal from '../../CartPopModal';
import CompareModal from '../../CompareModal';
import LoginModal from '../../LoginModal';
import ProductViewModal from '../../ProductViewModal';
import RegisterModal from '../../RegisterModal';
import './header.scss';

function Header() {
    return (
        <header className="header-area header-sticky text-center header-default">
            <div className="header-main-sticky">
                <div className="header-main-head">
                    <div className="header-main">
                        <div className="container">
                            <div className="header-left float-left d-flex d-lg-flex d-md-block d-xs-block">
                                <div className="language-wrapper toggle">
                                    <button type="button" className="btn text-capitalize dropdown-toggle">
                                        <img src="img/banner/en.png" alt="en" height={12} width={18} />
                                        <span>English</span>
                                    </button>
                                    <div id="language-dropdown" className="language">
                                        <ul>
                                            <li>
                                                <img src="img/banner/en.png" alt="en" width={18} height={12} />
                                                <span>English</span>
                                            </li>
                                            <li>
                                                <img src="img/banner/fr.png" alt="fr" width={18} height={12} />
                                                <span>French</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="currency-wrapper toggle">
                                    <button type="button" className="btn text-capitalize dropdown-toggle">
                                        <span>€ Euro</span>
                                    </button>
                                    <div id="currency-dropdown" className="currency">
                                        <ul>
                                            <li>
                                                <span>€ Euro</span>
                                            </li>
                                            <li>
                                                <span>£ Pound Sterling</span>
                                            </li>
                                            <li>
                                                <span>$ US Dollar</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="contact">
                                    <i className="material-icons">phone</i>
                                    <a href="tel:+1234567890">1234567890</a>
                                </div>
                            </div>
                            <div className="header-middle float-lg-left float-md-left float-sm-left float-xs-none">
                                <div className="logo">
                                    <a href="/">
                                        <img src="img/logos/logo.png" alt="logo" width={200} height={50} />
                                    </a>
                                </div>
                            </div>
                            <div className="header-right d-flex d-xs-flex d-sm-flex justify-content-end float-right">
                                <div className="search-wrapper">
                                    <a>
                                        <i className="material-icons search">search</i>
                                        <i className="material-icons close">close</i>{' '}
                                    </a>
                                    <form autoComplete="off" action="/action_page.php" className="search-form">
                                        <div className="autocomplete">
                                            <input
                                                id="myInput"
                                                type="text"
                                                name="myCountry"
                                                placeholder="Search here"
                                            />
                                            <button type="button">
                                                <i className="material-icons">search</i>
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="user-info" style={{ width: 0 }}></div>
                                {/* <div className="user-info">
                                    <button type="button" className="btn">
                                        <i className="material-icons">perm_identity</i>{' '}
                                    </button>
                                    <div id="user-dropdown" className="user-menu">
                                        <ul>
                                            <li>
                                                <a href="my-account.html" className="text-capitalize">
                                                    my account
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="modal-view button"
                                                    data-toggle="modal"
                                                    data-target="#modalRegisterForm"
                                                >
                                                    Đăng ký
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="modal-view button"
                                                    data-toggle="modal"
                                                    data-target="#modalLoginForm"
                                                >
                                                    Đăng nhập
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="cart-wrapper">
                                    <button type="button" className="btn">
                                        <i className="material-icons">shopping_cart</i>
                                        <span className="ttcount">2</span>{' '}
                                    </button>
                                    <div id="cart-dropdown" className="cart-menu">
                                        <ul className="w-100 float-left">
                                            <li>
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-center">
                                                                <a href="#">
                                                                    <img
                                                                        src="img/products/01.jpg"
                                                                        alt={1}
                                                                        title={1}
                                                                        height={104}
                                                                        width={80}
                                                                    />
                                                                </a>
                                                            </td>
                                                            <td className="text-left product-name">
                                                                <a href="#">Xin ưu tiên ặc </a>
                                                                <div className="quantity float-left w-100">
                                                                    <span className="cart-qty">1 × </span>
                                                                    <span className="text-left price"> $20.00</span>
                                                                </div>
                                                            </td>
                                                            <td className="text-center close">
                                                                <a className="close-cart">
                                                                    <i className="material-icons">close</i>
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <table className="table price mb-30">
                                                    <tbody>
                                                        <tr>
                                                            <td className="text-left">
                                                                <strong>Total</strong>
                                                            </td>
                                                            <td className="text-right">
                                                                <strong>$2,122.00</strong>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li className="buttons w-100 float-left">
                                                <div className="cart-button">
                                                    <button className="btn pull-left mt_10 btn-primary btn-rounded w-100">
                                                        Giỏ hàng
                                                    </button>
                                                    <button className="btn pull-right mt_10 btn-primary btn-rounded w-100">
                                                        Thanh toán
                                                    </button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
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
                                        className="modal-view button"
                                        data-toggle="modal"
                                        data-target="#modalLoginForm"
                                    >
                                        Đăng nhập
                                    </a>
                                </div>
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
        </header>
    );
}
export default Header;
