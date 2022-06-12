import { useState, useEffect } from 'react';
import { addShake } from '../validator/handlerForm';
import Validator from '../validator/validator';
function LoginModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);
    const rules = [
        {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nhập email',
        },
        {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Email không hợp lệ',
        },
        {
            field: 'email',
            method: isEmailExist,
            validWhen: true,
            message: 'Email không tồn tại',
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nhập mật khẩu',
        },
    ];
    const validator = new Validator(rules);
    function showPassword() {
        const password = document.querySelector('#LoginForm-pass');
        if (password.type === 'password') {
            password.type = 'text';
        } else {
            password.type = 'password';
        }
    }
    function isEmptyAll() {
        return password === '' && email === '';
    }
    function isEmailExist() {
        for (const user of users) {
            if (user.email === email) {
                return true;
            }
        }
        return false;
    }
    async function fetchData() {
        if (!isEmptyAll()) {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => response.json())
                .then((data) => {
                    setUsers(data);
                });
            console.log('request ok');
        }
    }

    useEffect(() => {
        fetchData();
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(
            validator.validate({
                email: email,
                password: password,
            }),
        );
        fetchData();
        addShake();
    };
    return (
        <div className="modal fade" id="modalLoginForm" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-medium text-left">Đăng nhập</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-4">
                                <input
                                    type="text"
                                    id="LoginForm-name"
                                    className="form-control validate"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                    <div className="validation shake-validate">
                                        <div className="warn-icon">
                                            <i className="material-icons">info</i>
                                        </div>
                                        <div className="warn-title">
                                            <span> {errors.email}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="md-form mb-4">
                                <input
                                    type="password"
                                    id="LoginForm-pass"
                                    className="form-control validate"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && (
                                    <div className="validation shake-validate">
                                        <div className="warn-icon">
                                            <i className="material-icons">info</i>
                                        </div>
                                        <div className="warn-title">
                                            <span> {errors.password}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="checkbox-link d-flex justify-content-between">
                                <div className="left-col show-password">
                                    <input
                                        type="checkbox"
                                        id="remember_me"
                                        onClick={(e) => {
                                            showPassword();
                                        }}
                                    />
                                    <label htmlFor="remember_me" style={{ padding: '0 4px' }}>
                                        Hiện mật khẩu
                                    </label>
                                </div>
                                <div className="right-col">
                                    Bạn chưa có tài khoản hãy ?
                                    <a
                                        href="#"
                                        data-target="#modalLoginForm"
                                        data-dismiss="modal"
                                        data-toggle="modal"
                                        id="btn-modal"
                                    >
                                        &nbsp;Đăng ký
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">
                                Đăng nhập
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginModal;
