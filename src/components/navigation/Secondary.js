import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Secondary = () => {
    const storage = window.localStorage;
    const location = useLocation();
    const isLoggedIn = storage.getItem('SignedIn') === 'true';

    const handleSignIn = () => {
        storage.setItem('SignedIn', 'true');
    };

    const handleSignOut = () => {
        storage.removeItem('SignedIn');
    };

    return (
        <nav
            className="navbar navbar-dark navbar-secondary"
            id="navbar-secondary"
        >
            <div className="container">
                <a className="navbar-brand d-none-navbar-vertical" href="/">
                    <img
                        className="navbar-brand-logo navbar-brand-logo-medium d-none d-sm-inline-block mr-4"
                        src="/assets/img/ZerobaseLogo_Dark.png"
                        alt="Zerobase"
                    />
                    <img
                        className="navbar-brand-logo navbar-brand-logo-small d-inline-block d-sm-none"
                        src="/assets/img/ZerobaseLogo_Dark_small.png"
                        alt="Zerobase"
                    />
                    <h4 className="d-none d-sm-inline-block text-standard text-muted">
                        Privacy-First Contact Tracing for Communities
                    </h4>
                </a>
                <Link
                    className="btn btn-secondary"
                    onClick={isLoggedIn ? handleSignOut : handleSignIn}
                    to={
                        !isLoggedIn
                            ? '/admin'
                            : location.pathname === '/admin'
                            ? '/'
                            : location.pathname
                    }
                >
                    {isLoggedIn ? 'Sign Out' : 'Sign In'}
                </Link>
                <ul className="navbar-nav ml-auto forMobile">
                    <li className="nav-item dropdown pl-3">
                        <a
                            className="btn btn-secondary btn-icon"
                            href="/scan"
                            id="scan-button"
                        >
                            <i className="fe fe-maximize mr-2"></i>Scan
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Secondary;
