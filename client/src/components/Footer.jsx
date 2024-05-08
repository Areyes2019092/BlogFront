import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <footer>
      <ul className="footer__categories">
        <li><Link to="/posts/categories/Agriculture">Taller</Link></li>
        <li><Link to="/posts/categories/Business">Practica Supervisada</Link></li>
        <li><Link to="/posts/categories/Education">Tegnologia</Link></li>
      </ul>
      <div className="footer__copyright">
        <small>Blog Angel Reyes</small>
      </div>
    </footer>
  )
}

export default Footer
