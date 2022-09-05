import React from 'react';
import {Link,Outlet} from 'react-router-dom';

const Header = () => {
  return (
    <nav>

        <Link to='settings'> Settings</Link>
        <Link to='questions'>Questions</Link>
        <Link to='scores'>Scores</Link>

        <Outlet/>
    </nav>
  )
}

export default Header