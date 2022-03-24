import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/favicon.svg';

export default function Navbar() {
    let navigate = useNavigate();

    return (
        <header className="py-2 fixed-top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 offset-xl-2 ">
                        <div className="d-flex justify-content-between">
                            <Link className="navbar-brand" to="/">
                                <img src={logo} alt="Logo" width="26" height="26" className="d-inline-block align-text-top me-3" />
                                stage4
                            </Link>
                            <div onClick={() => navigate(-1)} className="circle">‹</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}