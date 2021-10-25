import React, { useState } from 'react';
import { Link, withRouter } from "react-router-dom";

import '../CSS/Admin.css';
import logo from "../Images/TechnoRUCS Final.png"
import UserLogin from "../Images/Userlogin.png"
import passwordlogin from "../Images/passwordlogin.png"

function AdminPage() 
{
 
    return(<div className="loginpage">
    <div className="leftcont">
        <img src={logo} alt=""/>
    </div>
    <div className="rightcont">
        <a href="#" className="adminlogin" onClick={test}><Link to="/Login"><button>Login as Admin</button></Link></a>
        <a href="#" className="adminlogin"><Link to="/Login"><button>Login as User</button></Link></a>
    </div>
</div>
)

function test()
{

}

}

export default AdminPage;
