'use client';
import Link from 'next/link'
// import { useEffect, useState } from 'react';

function Header() {
    // const [islogin, setIsLogin] = useState('');

    // useEffect(() => {
    //     const cookie = document.cookie.includes('token');
    //     setIsLogin(cookie);

    // }, []);

    return (
        <header className="navbar navbar-expand-lg bg-body-tertiary">
            <nav className="container-fluid" >
                <Link className="navbar-brand" href="/">SSK Mact Society Ltd</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">SSK Mact Society Ltd</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" aria-current="page" href="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/group-view">Deposit</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/member-details">Loan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/assign-loan">Transaction</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-bold" href="/loan-repayment">Reports</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link className="btn  fw-semibold me-2" aria-current="page" href="/login">13 - July - 2026 10 : 35 PM</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-outline-primary fw-semibold" href="/signup">Sign Up</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header;
