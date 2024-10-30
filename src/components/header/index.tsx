import React from 'react';
import Link from 'next/link';
import './header.scss';
import Image from 'next/image';

//style
import menu from '@/images/menu-scale.svg'

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid d-flex justify-content-between">
                    <a className="navbar-brand" href="#">Collers</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <Image src={menu} alt='menu' />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="#">Products</Link>
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
                        <form className="d-flex">
                            <button className="btn" type="submit">Sign up now</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    );
}
