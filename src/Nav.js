import React from 'react'

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

function Nav() {
    return (
        <>
        <div className="container-fluid">
            <div className='row'>
                <div className='col-10 mx-auto'>
                <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img src="https://www.logodesign.net/images/nature-logo.png" style={{width:'100px'}} alt=""/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
  
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="karachi ! " aria-label="Search" />
        
      </form>
    </div>
    <button className="btn btn-outline-success" type="submit"> Search </button>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"> <AccountCircleIcon /> </li>
    </ul>
  </div>
</nav>
        </div>
                </div>
            </div>

         
        </div>
        <div>
          <div className="moves">
           <p>  <FormatAlignLeftIcon /> Browse category </p>
           <p> How To Borrow <KeyboardArrowDownIcon /> </p>
           <p> Referral Program </p>
           <p> About Borrow</p>
           <p> Community Relief </p>
           <p> Blogs & New </p>

           <p>Contact</p>
       </div>
          </div>
        
 </>
    )
}

export default Nav
