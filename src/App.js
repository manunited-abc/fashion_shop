import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes, paths } from './routes';
import DefaultLayout from './component/Layout/DefaultLayout';
import Header from './component/Layout/Header';
import Footer from './component/Layout/Footer';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <div className="App">
            <Header />
            {!paths.includes(window.location.pathname) ? (
                <NotFoundPage />
            ) : (
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = route.layout || DefaultLayout;
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            )}

            <Footer />
        </div>
    );
}

export default App;
