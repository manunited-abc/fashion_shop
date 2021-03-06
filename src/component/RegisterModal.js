import { useEffect, useRef, useState } from 'react';
import Validator from '../validator/validator';
import { addShake } from '../validator/handlerForm';
import Button from './Button';
function RegisterModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});

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
        if (value === '') {
            return true;
        }
        return /\d/g.test(value);
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
    function isEmailExist(value) {
        return user.email === value;
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

    const rules = [
        {
            field: 'name',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nh???p t??n',
        },
        {
            field: 'name',
            method: isLength,
            validWhen: true,
            message: 'Kh??ng qu?? 20 k?? t???',
        },
        {
            field: 'phoneNum',
            method: isPhoneNumber,
            validWhen: true,
            message: 'S??? ??i???n tho???i kh??ng h???p l???',
        },
        {
            field: 'email',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nh???p email',
        },
        {
            field: 'email',
            method: isEmailExist,
            validWhen: false,
            message: 'Email ???? t???n t???i',
        },
        {
            field: 'email',
            method: 'isEmail',
            validWhen: true,
            message: 'Email kh??ng h???p l???',
        },
        {
            field: 'password',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nh???p m???t kh???u',
        },
        {
            field: 'password',
            method: isPasswordValid,
            validWhen: true,
            message: 'M???t kh???u kh??ng h???p l???',
        },
        {
            field: 'rePassword',
            method: 'isEmpty',
            validWhen: false,
            message: 'Nh???p l???i m???t kh???u',
        },
        {
            field: 'rePassword',
            method: isPasswordSame,
            validWhen: true,
            message: 'M???t kh???u kh??ng kh???p',
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
        }),
    };

    async function fetchData() {
        if (isValidateSuccess()) {
            fetch('http://localhost:8080/users/add-user', requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                })
                .catch(() => console.log('failed'));
        }
    }
    async function getUserByEmail(value) {
        fetch('http://localhost:8080/users/check-email?email=' + value)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            })
            .catch();
    }
    useEffect(() => {
        fetchData();
        getUserByEmail();
    }, []);

    //Validation

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
                        <h4 className="modal-title w-100 font-weight-medium text-left">????ng k??</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">??</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body mx-3">
                            <div className="md-form mb-4">
                                <input
                                    type="text"
                                    id="RegisterForm-name"
                                    className="form-control validate"
                                    placeholder="T??n *"
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
                                    placeholder="S??? ??i???n tho???i"
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
                                        getUserByEmail(e.target.value);
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
                                    placeholder="M???t kh???u *"
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
                                    <span>S??? d???ng 6 k?? t??? tr??? l??n, g???m ch??? v?? s???</span>
                                </div>
                            </div>
                            <div className="md-form mb-4">
                                <input
                                    type="password"
                                    id="RegisterForm-re-pass"
                                    className="form-control validate"
                                    placeholder="Nh???p l???i kh???u *"
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
                                        Hi???n m???t kh???u
                                    </label>
                                </div>
                                <div className="left-col">
                                    B???n ???? c?? t??i kho???n h??y ?
                                    <a
                                        href="#"
                                        data-target="#modalLoginForm"
                                        data-dismiss="modal"
                                        data-toggle="modal"
                                        id="btn-modal"
                                    >
                                        &nbsp;????ng nh???p
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer d-flex justify-content-center">
                            <input
                                className="btn btn-primary display-modal"
                                data-dismiss=""
                                type="submit"
                                value="????ng k??"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterModal;
