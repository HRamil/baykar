import React from 'react'

//style
import './header.scss'
import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" href="#">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Solutions</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Pricing</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Resources</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="#">Log In</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="sign up">
                            <button className="btn" type="submit">Sign up now</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}
