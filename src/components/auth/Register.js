import React from 'react';
import { BsAt,BsFillTelephoneFill } from 'react-icons/bs';
import { FaLock, FaUser } from 'react-icons/fa';
const Register = () => {
    return (
        <>
         <div className="register">
                <div className="card">
                <div className="image-logo">
                        <img src="https://i.ibb.co/RQYHc7Q/reg.webp" />
                    </div>
                    <div className="auth">
                        <h3>Register</h3>
                        <form>
                            {/* userName */}
                            <div className="form-group">
                                <label htmlFor="userName">User Name</label>
                                <div className="icon-input">
                                    <div className="icon"><FaUser /></div>
                                    <input type="text" name='name' id="userName" placeholder="User Name" className="form-control" />

                                </div>
                            </div>
                            {/* email */}
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <div className="icon-input">
                                    <div className="icon"><BsAt /></div>
                                    <input type="email" name='emai' id="email" placeholder="Emai" className="form-control" />

                                </div>
                            </div>
                            {/* password */}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <div className="icon-input">
                                    <div className="icon"><FaLock /></div>
                                    <input type="password" name='password' id="password" placeholder="Password" className="form-control" />
                                </div>
                            </div>
                               {/* phone */}
                               <div className="form-group">
                                <label htmlFor="password">Phone</label>
                                <div className="icon-input">
                                    <div className="icon"><BsFillTelephoneFill /></div>
                                    <input type="text" name='name' id="password" placeholder="your phone number" className="form-control" />
                                </div>
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
