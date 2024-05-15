import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-custom-color"> {/* Cambiar aquí */}
                <div className="blog">
                    <Link className="blog-nombre">Blog</Link>
                </div>
                <div className="contenedor-opciones">
                    <ul className="opciones">
                        <li>
                            <Link to="/" className="home-go">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/posts" className="post-go">Ver Posts</Link>
                        </li>
                        <li>
                            <Link to="/create" className="create-post-whynot">Crear Publicacion</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}