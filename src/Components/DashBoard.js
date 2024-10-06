import React, { useState } from 'react'
import { Link, Outlet, useNavigate, useSearchParams } from 'react-router-dom'
import Adddefect from './Adddefect';
import View from './View';

function DashBoard() {
    const navigation = useNavigate()
    
    
  return (
    <div>
      <h1>Defect Traker</h1>
      <div style={{display:'flex', flexDirection:'column' ,alignItems:'center'}}>
        <nav className="navbar navbar-dark bg-dark" style={{borderRadius:'10px'}} >
            <div className="container">
                <li className="nav-item">
                    <Link className="navbar-brand" to="Adddefect">
                        Add Deffect
                    </Link>
                    {/* <Link className="navbar-brand" to="View" >
                        View Defect
                    </Link>   */}
                    
                </li>
            </div>
            </nav>
        <Outlet/>
      </div>

      
    

      <button 
        type="submit" 
        className="btn btn-primary" 
        style={{marginTop:'2%'}}
        onClick={() => navigation('/LoginPage')}>
        Log Out
        </button>
    </div>
  )
}

export default DashBoard
