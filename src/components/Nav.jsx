import { Link } from 'react-router-dom'

function Nav(){
    return (
        <nav>
          <Link to="/">Home</Link>
          {/* <Link to="/about">About</Link>
          <Link to="/Contact">Contact</Link> */}
          <Link to="/users/Ronaldo">Ronaldo</Link>
          <Link to="/users/Virat">Virat</Link>
        </nav>
    );
}

export default Nav;