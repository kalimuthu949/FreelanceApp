import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../CSS/Admin.css';
import hamburger from "../Images/hamburger.png"
import downarrow from "../Images/downarrow.png"
import profilepicc from "../Images/profilepicc.jpg"
import add from "../Images/add.png"
import eye from "../Images/eye.png"
import report from "../Images/report.png"

var arrprojectdetails=[];

function Dashboard() 
{
 
    const[projectdetails,setprojectdetails]=useState([]);


    useEffect(()=>
    {
        getProjectDetails();

    },arrprojectdetails);
    
    return(<div className="homepage">
    <div className="nav">
        <nav>
            <div className="leftcont">
                <button><img src={hamburger} alt=""/></button>
                <a href="./adminhomepage.html">TECHNORUCS</a>
            </div>
            <div className="rightcont">
                <a href="">Admin <img src={downarrow} alt=""/></a>
                <img src={profilepicc} alt=""/>
            </div>
        </nav>
    </div>

    <div className="buttonrow">
        <div className="leftcont">
            <select name="filter" id=""> <option value="Filter">filter</option></select>
        </div>

        <div className="rightcont">
            <a href="./addproject.html"><button><img src={add} alt=""/>Add Project</button></a>
        </div>
    </div>

    <div className="maincont">
        {
            projectdetails.map(element => 
            {
                var user="";
                element.assigned_To.map(element=>
                {
                    user+=element.assignedMember+";";
                })
                
                return(
                    <div className="cont cont1">
                    <div className="cont11">
                        <p>{element.project_Name}</p>
                        <p>{user}</p>
                    </div>
                    <div className="cont12">
                        <p>Description :</p>
                        <p>{element.description}</p>
                    </div>
                    <div className="cont13">
                        <div className="date">
                            <p>{element.from}</p>
                            <p>-</p>
                            <p>{element.to}</p>
                        </div>
                        <div className="icon">
                            <div className="viewicon">
                                <a href="#"><Link to={{pathname:"/ViewPage",state:"616985b7cc07aca8912156df"}}><img src={eye} alt=""/></Link></a>
                            </div>
                            <div className="reporticon">
                                <a href="../Htmls/reportpage.html"><img src={report} alt=""/></a>
                            </div>
                        </div>
                    </div>
                    
                </div>)
            })

        }
        </div>

        
    </div>
)

async function getProjectDetails()
{
    await fetch("https://freelancerlogging.azurewebsites.net/admin/showProjects", 
    {
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        }
      })
      .then(async response => await response.json())
      .then(async response => 
      {
        console.log(response)    
        setprojectdetails(response.projectDetails);
      })
      .catch(err => {
        console.log(err);
      });
  }
}



export default Dashboard;
