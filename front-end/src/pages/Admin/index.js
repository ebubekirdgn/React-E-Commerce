import React from 'react'
import { Link } from 'react-router-dom'

function Admin() {
  return (
    <div>
         <nav className='admin-menu'>
            <li>
                <Link to="/"> Anasayfa </Link>
            </li>

         </nav>
    </div>
  )
}

export default Admin