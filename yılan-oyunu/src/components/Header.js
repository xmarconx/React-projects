import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
          <Link to='/' style={{textDecoration:"none"}}>Yılan Oyunu</Link>
      </div>
    )
  }
}
