
function Signup() {
    return (
        <div className="container col-xxl-8 px-4 py-4">
            <div className="row flex-lg-row-reverse align-items-center bg-white border rounded-3 py-5">
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                        <h1>Sign up</h1>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" autoComplete="off" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">
                                User Name
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" autoComplete="off" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">
                                Email address
                            </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" autoComplete="off" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">
                                Password
                            </label>
                        </div>
                         <small className="text-body-secondary my-4">
                            Already have an account? <a href="/login" className="text-decoration-none">Login</a>
                        </small>

                        <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">
                            Sign Up
                        </button>
                       
                    </form>
                </div>
                {/* <div className="col-10 col-sm-8 col-lg-6">
                    <Image src={logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div> */}
            </div>
        </div>
    )
}
export default Signup;