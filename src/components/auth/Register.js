import React, { useEffect, useState } from 'react';
import { BsAt, BsFillTelephoneFill } from 'react-icons/bs';
import { FaLock, FaUser } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
const Register = () => {
    const history = useHistory();
    const initialValues = { username: "", email: "", password: "", phone: '' };
    const [state, setState] = useState(initialValues);
    const [isSubmit, setIsSubmit] = useState(false);
    const [formErrors, setFormErrors] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(state));
        setIsSubmit(true);
        history.replace('/dashborad')
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(state);
        }
    }, [formErrors])
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required!";
        } else if (values.phone.length < 11) {
            errors.password = "Phone number must be more than 11 characters";
        } else if (values.password.length > 11) {
            errors.password = "Phone number cannot exceed more than 11 characters";
        }
        return errors;
    }
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
        console.log(state);
    };
    return (
        <>
            <div className="register">

                <div className="card">
                    <div className="image-logo">
                        <img src="https://i.ibb.co/RQYHc7Q/reg.webp" />
                    </div>
                    <div className="auth">
                        {
                            Object.keys(formErrors).length === 0 && isSubmit ? (
                                swal({
                                    title: "Account Create successfully!",
                                    icon: "success",
                                })
                            ) : (
                                ''
                            )}

                        <h3>Create Account</h3>
                        <form onSubmit={handleSubmit}>
                            {/* userName */}
                            <div className="form-group">
                                <label htmlFor="userName">User Name</label>
                                <div className="icon-input">
                                    <div className="icon"><FaUser /></div>
                                    <input
                                        value={state.username}
                                        onChange={handleOnChange}
                                        type="text" name='username' id="userName" placeholder="User Name" className="form-control" />

                                </div>
                                <p className="error">{formErrors.username}</p>
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="icon-input">
                                    <div className="icon"><BsAt /></div>
                                    <input
                                        value={state.email}
                                        name="email"
                                        onChange={handleOnChange}
                                        type="email"
                                        id="email" placeholder="Email"
                                        className="form-control" />
                                    <span></span>

                                </div>
                                <p className="error">{formErrors.email}</p>
                            </div>
                            {/* password */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="icon-input">
                                    <div className="icon"><FaLock /></div>
                                    <input type="password"
                                        name="password"
                                        value={state.password}
                                        onChange={handleOnChange}
                                        id="password" placeholder="Password" className="form-control" />
                                </div>
                                <p className="error">{formErrors.password}</p>
                            </div>
                            {/* phone */}
                            <div className="form-group">
                                <label htmlFor="password">Phone</label>
                                <div className="icon-input">
                                    <div className="icon"><BsFillTelephoneFill /></div>
                                    <input
                                        value={state.phone}
                                        onChange={handleOnChange}
                                        type="text" name='phone' id="password" placeholder="your phone number" className="form-control" />
                                </div>
                                <p className="error">{formErrors.phone}</p>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-block">Register</button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Register;
