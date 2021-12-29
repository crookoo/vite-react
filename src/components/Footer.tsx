import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Footer() {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('darkmode');
        } else {
            document.body.classList.remove('darkmode');
        }
    }, [darkMode]);

    return (
        <footer className="footer mt-auto py-3">
            {/* <button onClick={() => setDarkMode(previousValue => !previousValue)}>Toggle</button> */}
            <div className="container d-flex justify-content-between">
                <div className="form-check form-check-inline form-switch">
                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={() => setDarkMode(previousValue => !previousValue)}></input>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Darkmode</label>
                </div>
                <div>
                    <Link to="/datenschutz">Datenschutz</Link>
                    <Link to="/impressum" className="ps-3">Impressum</Link>
                </div>
            </div>
        </footer>
    )
}