import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container d-flex justify-content-end">
                <Link to="/datenschutz">Datenschutz</Link>
                <Link to="/impressum" className="ps-3">Impressum</Link>
            </div>
        </footer>
    )
}