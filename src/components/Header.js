
import { Link } from 'react-router-dom'

import Search from './Search'
function Header() {
  return (

    <header>
        <nav>
            <ul>
                <li>
                    <Link to='/'>HOMe</Link>
                </li>
                <li>
                    <Link to='/list'>List</Link>
                    
                </li>
                <li>
                <Link to='/favorites'>Favorites</Link>
                </li>
            </ul>
            <Search/>
        </nav>
    </header>
  )
}

export default Header