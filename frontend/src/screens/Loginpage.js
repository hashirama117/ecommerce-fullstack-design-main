import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title text-center">
                                {isLogin ? "Login" : "Register"}
                            </h3>
                            <form>
                                {!isLogin && (
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                )}
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        placeholder="Enter your password"
                                    />
                                </div>
                                {!isLogin && (
                                    <div className="mb-3">
                                        <label htmlFor="isAdmin" className="form-label">
                                            isAdmin
                                        </label>
                                        <select
                                            className="form-control"
                                            id="isAdmin"
                                        >
                                            <option value="false">False</option>
                                            <option value="true">True</option>
                                        </select>
                                    </div>
                                )}
                                <button type="submit" className="btn btn-primary">
                                    {isLogin ? "Login" : "Register"}
                                </button>
                            </form>
                            <div className="text-center mt-3">
                                <button
                                    className="btn btn-link"
                                    onClick={toggleForm}
                                >
                                    {isLogin
                                        ? "Don't have an account? Register"
                                        : "Already have an account? Login"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;