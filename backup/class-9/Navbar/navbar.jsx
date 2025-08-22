import React from 'react'


const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
      <a href="/index" className='navbar-brand'>Logo</a>
      <div className="ms-auto">
        
          <ul className='navbar-nav'>
            <li className="nav-item"><a href="./index" className='nav-link'>Home</a></li>
            <li className="nav-item"><a href="/about" className='nav-link'>About</a></li>
            <li className="nav-item"><a href="/services" className='nav-link'>Services</a></li>
            <li className="nav-item"><a href="/products" className='nav-link'>Products</a></li>
            <li className="nav-item"><a href="/contact" className='nav-link'>Contact</a></li>
            <li className="nav-item"><a href="/employees" className='nav-link'>Employees</a></li>
            <li className="nav-item"><a href="/login" className='nav-link'>Login</a></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar;