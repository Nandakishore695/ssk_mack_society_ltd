'use client'
import Image from "next/image";
import logo from "../../../public/Wavy_Bus-27_Single-10.jpg";
import { useRouter } from "next/navigation";

function Login() {
    const router = useRouter();

    const handleLogin = (event) => {
        event.preventDefault();
        router.push('/membership-list')
    }
    
    return (
        <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center bg-white border rounded-3 py-5">
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleLogin}>
                        <h1>Welcome!</h1>
                        <small className="text-body-secondary">
                            Login to your account to continue.
                        </small>
                        <hr className="my-4" />
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" autoComplete="off" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">
                                User Name
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" autoComplete="off" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">
                                Password
                            </label>
                        </div>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" value="remember-me" />
                                Remember me
                            </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">
                            Login
                        </button>
                    </form>
                </div>
                <div className="col-10 col-sm-8 col-lg-6">
                    <Image src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
export default Login;