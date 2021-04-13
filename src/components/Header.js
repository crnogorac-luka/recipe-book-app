import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link to="/"><a><img src="./media/icon_back.png" alt="back icon"/></a></Link>
                <h1 className="mb-0">Recepti</h1>
                <h4 className="mb-0">Korisnik</h4>
            </div>
        </nav>
    )
}
