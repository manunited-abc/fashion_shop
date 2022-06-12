import ShopWoman from '../pages/ShopWoman';
import Home from '../pages/Home';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/woman', component: ShopWoman },
];
const paths = [];
publicRoutes.forEach((element, index) => {
    paths[index] = element.path;
});

const privateRoutes = [];

export { publicRoutes, privateRoutes, paths };
