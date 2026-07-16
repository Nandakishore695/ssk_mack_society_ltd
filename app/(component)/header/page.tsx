'use client';
import Link from 'next/link'
import { useState } from 'react';

function Header() {
    const [fullDate] = useState({ eventDate: new Date() });

    const date = fullDate.eventDate.getDate();
    const month = fullDate.eventDate.getMonth() + 1;
    const year = fullDate.eventDate.getFullYear();
    const hours = fullDate.eventDate.getHours();
    const minutes = fullDate.eventDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM"

    return (
        <>
            <header className="navbar navbar-expand-lg shadow-sm">
                <nav className="container-fluid" >
                    <Link className="navbar-brand" href="/membership-list">SSK Mact Society Ltd</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">SSK Mact Society Ltd</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
                                <li className="nav-item flex-shrink-0 dropdown">
                                    <Link className="nav-link fw-bold d-block text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false" href="/membership">Membership</Link>
                                    <ul className="dropdown-menu text-small shadow">
                                        <li>
                                            <Link className="dropdown-item" href="/membership-list">
                                                Membership List
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/new-membership-creation">
                                                Membership Create
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" href="/signup">
                                                Account Create
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item flex-shrink-0 dropdown">
                                    <Link className="nav-link fw-bold d-block text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false" href="#">Deposit</Link>
                                    <ul className="dropdown-menu text-small shadow">
                                        <li>
                                            <Link className="dropdown-item" href="/fixed-deposit">
                                                Fixed Deposit
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Saving Deposit
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item flex-shrink-0 dropdown">
                                    <Link className="nav-link fw-bold d-block text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false" href="#">Loan</Link>
                                    <ul className="dropdown-menu text-small shadow">
                                        <li>
                                            <Link className="dropdown-item" href="#">
                                                Term Loan
                                            </Link>
                                        </li>

                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link fw-bold" href="#">Transaction</Link>
                                </li>

                                <li className="nav-item flex-shrink-0 dropdown">
                                    <Link className="nav-link fw-bold d-block text-decoration-none" data-bs-toggle="dropdown" aria-expanded="false" href="#">Reports</Link>
                                    <ul className="dropdown-menu text-small shadow">
                                        <li>
                                            <Link className="dropdown-item" href="#">
                                                Bank Statement
                                            </Link>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                Cash Book
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="btn fw-semibold me-2" aria-current="page" href="/login">{date} - {month} - {year} {hours} : {minutes} {ampm}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-outline-primary fw-semibold " href="/login">Sign Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header;
