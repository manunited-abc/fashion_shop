import ShopWoman from '../pages/ShopWoman';
import Home from '../pages/Home';
import ProductDetail from '../pages/ProductDetail';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import OrderConfirm from '../pages/OrderConfirm';
import AddProduct from '../pages/Admin/AddProduct';
import SearchPage from '../pages/SearchPage';
import ShopMan from '../pages/ShopMan';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/woman', component: ShopWoman },
    { path: '/man', component: ShopMan },
    { path: '/products/:productId', component: ProductDetail },
    { path: '/cart', component: Cart },
    { path: '/checkout', component: Checkout },
    { path: '/order-confirm', component: OrderConfirm },
    { path: '/search', component: SearchPage },
];
const paths = [];
publicRoutes.forEach((element, index) => {
    paths[index] = element.path;
});

const privateRoutes = [];

export { publicRoutes, privateRoutes, paths };
