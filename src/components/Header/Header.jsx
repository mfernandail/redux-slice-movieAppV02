import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user2.svg';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="header-logo">Movie App</Link>      
      <div className="header-userImg">
        <img src={user} alt="user image" />
      </div>
    </div>
  )
}
