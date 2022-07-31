import { useEffect, useRef, useState } from 'react';
import Validator from '../validator/validator';
import { addShake } from '../validator/handlerForm';
import { progressBar } from '../validator/processorBar';
import Button from './Button';
function RegisterModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});
    const [isEmail, setIsEmail] = useState(false);
    const [valueProgress, setValueProgress] = useState(0);

    function isPasswordValid(value) {
        const pattern = /[0-9]/;
        const pattern1 = /[A-z]/;
        return value.length >= 6 && pattern.test(value) && pattern1.test(value);
    }
    function validPassword() {
        document.querySelector('.status-valid #valid').style.display = 'block';
        document.querySelector('.status-valid #invalid').style.display = 'none';
    }
    function invalidPassword() {
        document.querySelector('#invalid').style.display = 'block';
        document.querySelector('#valid').style.display = 'none';
    }
    function isPasswordSame() {
        return password === rePassword;
    }
    function isPhoneNumber(value) {
        if (value == '') {
            return true;
        }
        var str = value.match(/\d/g) != null ? value.match(/\d/g) : 0;
        console.log(str.length === 10);
        return str.length === 10 && value.length == 10;
    }
    function isLength(value) {
        return value.length <= 20;
    }
    function showPassword() {
        const password = document.querySelector('#RegisterForm-pass');
        const rePassword = document.querySelector('#RegisterForm-re-pass');
        if (password.type === 'password') {
            password.type = 'text';
            rePassword.type = 'text';
        } else {
            password.type = 'password';
            rePassword.type = 'password';
        }
    }
    function isEmptyAll() {
        return name === '' && password === '' && phoneNum === '' && email === '' && rePassword === '';
    }
    function isEmailExist() {
        return isEmail;
    }

    function isValidateSuccess() {
        return (
            !isEmailExist(email) &&
            isPhoneNumber(phoneNum) &&
            isPasswordValid(password) &&
            !isEmptyAll() &&
            isPasswordSame() &&
            isLength(name) &&
            validator.isEmail(email)
        );
    }
    function hideModalRegister() {
        const modalRegisterForm = document.querySelector('#modalRegisterForm button');
        const modalLoginForm = document.querySelector('#modalLoginForm');
        const btnLogin = document.querySelector('#btn-login-form');
        modalRegisterForm.click();
        btnLogin.click();
    }
    const rules = [
        {
            field: 'name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nhập tên',
        },
        {
            field: 'name',
            method: isLength,
            validWhen: true,
            message: 'Không quá 20 ký tự',
        },
        {
            field: 'phoneNum',
            method: isPhoneNumber,
            validWhen: true,
            message: 'Số điện thoại không hợp lệ',
        },
        {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nhập email',
        },
        {
            field: 'email',
            method: isEmailExist,
            validWhen: false,
            message: 'Email đã tồn tại',
        },
        {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Email không hợp lệ',
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nhập mật khẩu',
        },
        {
            field: 'password',
            method: isPasswordValid,
            validWhen: true,
            message: 'Mật khẩu không hợp lệ',
        },
        {
            field: 'rePassword',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nhập lại mật khẩu',
        },
        {
            field: 'rePassword',
            method: isPasswordSame,
            validWhen: true,
            message: 'Mật khẩu không khớp',
        },
    ];
    const validator = new Validator(rules);
    // Post restful API
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name,
            email: email,
            phone: phoneNum === '' ? null : phoneNum,
            password: password,
            role: ['user'],
        }),
    };

    async function fetchData() {
        if (isValidateSuccess()) {
            progressBar();
            setTimeout(addUser, 1700);
            function addUser() {
                fetch('http://localhost:8080/api/auth/signup', requestOptions)
                    .then((response) => response.json())
                    .then((data) => {
                        console.log(data);
                        setIsEmail(true);
                    })
                    .catch(() => console.log('failed'));
                document.getElementById('register-ok-btn').click();
                hideModalRegister();
            }
            // console.log('Time request: ' + time);
        }
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
        // fetchData();
        // getUserByEmail();
    }, []);

    //Handle on submit
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(
            validator.validate({
                name: name,
                phoneNum: phoneNum,
                email: email,
                password: password,
                rePassword: rePassword,
            }),
        );
        console.log(user);
        addShake();
        fetchData();
    };
    return (
        <div className="modal fade" id="modalRegisterForm" tabIndex={-1} role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-medium text-left">Đăng ký</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-4">
                                <input
                                    type="text"
                                    id="RegisterForm-name"
                                    className="form-control validate"
                                    placeholder="Tên *"
                                    name="name"
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                    }}
                                />
                                {errors.name && (
                                    <div className="validation shake-validate">
                                        <div className="warn-icon">
                                            <i className="material-icons">info</i>
                                        </div>
                                        <div className="warn-title">
                                            <span> {errors.name}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="md-form mb-4">
                                <input
                                    type="text"
                                    id="RegisterForm-phone-number"
                                    className="form-control validate"
                                    placeholder="Số điện thoại"
                                    name="phoneNum"
                                    value={phoneNum}
                                    onChange={(e) => {
                                        setPhoneNum(e.target.value);
                                    }}
                                />
                                {errors.phoneNum && (
                                    <div className="validation shake-validate">
                                        <div className="warn-icon">
                                            <i className="material-icons">info</i>
                                        </div>
                                        <div className="warn-title">
                                            <span> {errors.phoneNum}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="md-form mb-4">
                                <input
                                    type="text"
                                    id="RegisterForm-email"
                                    className="form-control validate"
                                    placeholder="Email *"
                                    name="email"
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
                            <div className="md-form mb-4" style={{ position: 'relative' }}>
                                <input
                                    type="password"
                                    id="RegisterForm-pass"
                                    className="form-control validate"
                                    placeholder="Mật khẩu *"
                                    name="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        isPasswordValid(e.target.value) ? validPassword() : invalidPassword();
                                    }}
                                />
                                <div className="status-valid">
                                    <i
                                        className="material-icons"
                                        id="valid"
                                        style={{ color: 'green', display: 'none' }}
                                    >
                                        done
                                    </i>
                                </div>
                                <div className="status-valid">
                                    <i
                                        className="material-icons"
                                        id="invalid"
                                        style={{ color: 'red', display: 'none' }}
                                    >
                                        close
                                    </i>
                                </div>
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
                                <div style={{ float: 'right' }}>
                                    <span>Sử dụng 6 ký tự trở lên, gồm chữ và số</span>
                                </div>
                            </div>
                            <div className="md-form mb-4">
                                <input
                                    type="password"
                                    id="RegisterForm-re-pass"
                                    className="form-control validate"
                                    placeholder="Nhập lại khẩu *"
                                    name="re-password"
                                    value={rePassword}
                                    onChange={(e) => {
                                        setRePassword(e.target.value);
                                    }}
                                />
                                {errors.rePassword && (
                                    <div className="validation shake-validate">
                                        <div className="warn-icon">
                                            <i className="material-icons">info</i>
                                        </div>
                                        <div className="warn-title">
                                            <span> {errors.rePassword}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="checkbox-link d-flex justify-content-between">
                                <div className="right-col show-password">
                                    <input
                                        type="checkbox"
                                        id="show-pass"
                                        onClick={(e) => {
                                            showPassword();
                                        }}
                                    />
                                    <label htmlFor="show-pass" style={{ padding: '0 4px' }}>
                                        Hiện mật khẩu
                                    </label>
                                </div>
                                <div className="left-col">
                                    Bạn đã có tài khoản hãy ?
                                    <a
                                        href="#"
                                        data-target="#modalLoginForm"
                                        data-dismiss="modal"
                                        data-toggle="modal"
                                        id="btn-modal"
                                    >
                                        &nbsp;Đăng nhập
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
                            <input
                                className="btn btn-primary display-modal"
                                data-dismiss=""
                                type="submit"
                                value="Đăng ký"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
