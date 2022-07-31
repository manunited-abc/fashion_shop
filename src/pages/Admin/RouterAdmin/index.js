import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from '../AddProduct';
import HomeAdmin from '../HomeAdmin';
function RouterAdmin() {
    return (
        <div>
            <Routes>
                <Route index element={<HomeAdmin />} />
                <Route path="add-product" element={<AddProduct />} />
            </Routes>
        </div>
    );
}

export default RouterAdmin;
