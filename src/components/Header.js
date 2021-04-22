import React from 'react'
import { Link } from 'react-router-dom'

// zaglavlje koje se ne mijenja
export default function Header() {
    return (
        <nav className="navbar mt-2">
            <div className="container-fluid px-0 px-md-auto">
                <Link to="/"><a><img src="./media/icon_back.png" alt="back icon"/></a></Link>
                <h1 className="mb-0">Kuharica</h1>
                <h4 className="mb-0">Korisnik</h4>
            </div>
        </nav>
    )
}
