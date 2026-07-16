
"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";


function CreateMember(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>
) {
    const router = useRouter();

    const handlerCancler = () => {
        router.push('/membership-list');
    }

    return (
        <>
            <header className="p-3 bg-body-tertiary shadow-sm">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li>
                                <h1 className="nav-link px-2 text-dark">
                                    Membership List
                                </h1>
                            </li>
                        </ul>

                        <div className="text-end">
                            <button type="button" className="btn btn-outline-dark me-2">
                                Save
                            </button>
                        </div>
                        <div className="text-end">
                            <button type="button" className="btn btn-outline-dark me-2" onClick={handlerCancler}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <div className="d-flex">
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary" style={{ width: "280px" }}>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link href="/new-membership-creation" className="nav-link active" aria-current="page">
                                Membership Details
                            </Link>
                        </li>
                        <li>
                            <Link href="/new-membership-creation/member-deposit" className="nav-link link-body-emphasis">
                                Deposit Details
                            </Link>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis">
                                Loan Details
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link link-body-emphasis">
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <Image src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/> */}
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
            <div>{children}</div>
            </div>

        </>
    )
}
export default CreateMember;