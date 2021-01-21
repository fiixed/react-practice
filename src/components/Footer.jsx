import React from 'react'

import {
    NavLink
} from 'react-router-dom';

export default function Footer() {
    return (
        <>
                <nav className="navbar fixed-bottom navbar-light bg-light">
                    <NavLink className="navbar-brand" to="/">Footer</NavLink>
                </nav>
            </>
    )
}

