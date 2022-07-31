import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, paths } from './routes';
import DefaultLayout from './component/Layout/DefaultLayout';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import NotFoundPage from './pages/NotFoundPage';
import Home from './pages/Home';
import AddProduct from './pages/Admin/AddProduct';
import Auth from './pages/Auth';
import HomeAdmin from './pages/Admin/HomeAdmin';
import RouterAdmin from './pages/Admin/RouterAdmin';
import HistoryOrder from './pages/HistoryOrder';
import { useSelector } from 'react-redux';
import { selectUser } from './store/userSlice';
import OrderDetail from './pages/HistoryOrder/OrderDetail';

function App() {
    const user = useSelector(selectUser) || {};
    return (
        <div className="App">
            <Header />
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Layout = route.layout || DefaultLayout;
                    let Page = route.component;
                    return <Route key={index} path={route.path} element={<Page />} />;
                })}

                <Route
                    path={'/admin/*'}
                    element={user.token != null && user.roles.includes('ROLE_ADMIN') ? <RouterAdmin /> : <Auth />}
                    // element={<RouterAdmin />}
                />
                <Route
                    path={'/history-order'}
                    element={user.token != null && user.roles.includes('ROLE_USER') ? <HistoryOrder /> : <Auth />}
                    // element={<RouterAdmin />}
                />
                <Route
                    path={'/history-order/:id'}
                    element={user.token != null && user.roles.includes('ROLE_USER') ? <OrderDetail /> : <Auth />}
                    // element={<RouterAdmin />}
                />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
