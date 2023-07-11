import React from 'react'
import {Link} from 'react-router-dom';
import './First.css';
import './Login';

export default function First() {
  return (
    <body className="bbb">
    <div className="b">
      <a><Link to="/Login"><button className="yy">Live Tix</button></Link></a>
      
    
    </div>
    </body>
  )
}
