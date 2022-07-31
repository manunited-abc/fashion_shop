import { useState, useEffect, useReducer } from 'react';
import { setLogin } from '../store/action';
import reducer, { initState } from '../store/reducer';
import { login } from '../store/userSlice';
import { addShake } from '../validator/handlerForm';
import { progressBar } from '../validator/processorBar';
import Validator from '../validator/validator';
import { useDebounce } from '../hook';
import { useDispatch, useSelector } from 'react-redux';
import { setCarts, setVouchers } from '../store/userSlice';
import { selectUser } from '../store/userSlice';
function LoginModal() {
    const user = useSelector(selectUser);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isEmail, setIsEmail] = useState(false);
    const dispatch = useDispatch();

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
        return password === '' || email === '';
    }
    function isEmailExist() {
        return isEmail;
    }
    function getVouchers(user) {
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer ' + user.token);
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        fetch(`http://localhost:8080/api/voucher/${user.email}`, requestOptions)
            .then((res) => res.json())
            .then((res) => {
                localStorage.setItem('vouchers', JSON.stringify(res.vouchers));
                dispatch(setVouchers(res.vouchers));
            });
    }
    async function getAccount() {
        if (!isEmptyAll() && isEmail) {
            progressBar();
            setTimeout(checkAccount, 1600);
            function checkAccount() {
                fetch('http://localhost:8080/api/auth/signin', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.email != undefined) {
                            localStorage.setItem('user', JSON.stringify(data));
                            document.getElementById('login-ok-btn').click();
                            getVouchers(data);
                            dispatch(login(JSON.stringify(data)));
                            hideModalLogin();
                        } else {
                            alert('Mật khẩu không chính xác');
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    }
    function hideModalLogin() {
        const modalRegisterForm = document.querySelector('#modalRegisterForm button');
        const modalLoginForm = document.querySelector('#modalLoginForm');
        const btnLogin = document.querySelector('#btn-login-form');
        modalLoginForm.click();
        btnLogin.click();
    }
    async function checkEmail(value) {
        fetch('http://localhost:8080/api/auth/check-email', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: value,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setIsEmail(data);
            })
            .catch();
    }
    useEffect(() => {
        // getAccount(email, password);
        // getUserByEmail(email);
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(
            validator.validate({
                email: email,
                password: password,
            }),
        );
        getAccount(email, password);
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
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        checkEmail(e.target.value);
                                    }}
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
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
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
                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            style={{ height: '5px', width: '0%' }}
                            role="progressbar"
                            aria-valuenow={0}
                            aria-valuemin={0}
                            aria-valuemax={100}
                        ></div>
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
