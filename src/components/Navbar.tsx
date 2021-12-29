import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    let navigate = useNavigate();
    
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">stage4</Link>
                <div onClick={() => navigate(-1)} className="circle">‹</div>
            </div>
        </nav>
    )
}