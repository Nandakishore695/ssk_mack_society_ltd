"use client";


import Link from "next/link";
import { useRouter } from "next/navigation";

function CreateMember() {
    const router = useRouter();

    const handlerCancler = () => {
        router.push('/dashboard');
    }

    return (
        <>
            <header className="p-3 text-bg-primary">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <h1 className="nav-link px-2 text-white">
                                    Membership Creation : -
                                </h1>
                            </li>
                        </ul>
                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2">
                                Save
                            </button>
                        </div>
                        <div className="text-end">
                            <button type="button" className="btn btn-outline-light me-2" onClick={handlerCancler}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "280px" }}>
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    {/* <svg className="bi pe-none me-2" width="40" height="32" aria-hidden="true">
                         <use xlink:href="#bootstrap">
                   ss     </use> 
                    </svg> */}
                    <span className="fs-4">
                        Sidebar
                    </span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                                {/* <use xlink:href="#home">
                                    </use> */}
                            </svg>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                                {/* <use xlink:href="#speedometer2">
                                    </use> */}
                            </svg>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                                {/* <use xlink:href="#table">
                                    </use> */}
                            </svg>
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                                {/* <use xlink:href="#grid">
                                    </use> */}
                            </svg>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            <svg className="bi pe-none me-2" width="16" height="16" aria-hidden="true">
                                {/* <use xlink:href="#people-circle">
                                    </use> */}
                            </svg>
                            Customers
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        {/* <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"> */}
                        <strong>
                            mdo
                        </strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li>
                            <a className="dropdown-item" href="#">
                                New project...
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li>
                            <a className="dropdown-item" href="#">
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default CreateMember;