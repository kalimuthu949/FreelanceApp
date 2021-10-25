import React, { useEffect, useState } from 'react';
import { Link, withRouter } from "react-router-dom";

import hamburger from "../Images/hamburger.png"
import downarrow from "../Images/downarrow.png"
import profilepicc from "../Images/profilepicc.jpg"

var arrSingleProjectDetail=[];

function ViewPage(props)
{
    
    const[projectID,setProjectID]=useState(0);
    const[prjctdetls,setprojctdetls]=useState(arrSingleProjectDetail);

    useEffect(()=>
    {
        getSingleProjectDetail();
    },[])

    return( <div className="addproj">
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
    <div className="viewcontwrap">
        {
            prjctdetls.map(element=>{

                var user="";
                element.assigned_To.map(element=>
                {
                    user+=element.assignedMember+";";
                })
                
                return(<div className="viewcont">
                <div className="heading">
                    <p>Project Details</p>
                </div>
                <div className="row row1">
                    <div className="cont cont1">
                        <label for="projname">Project Name</label>
                        <p>{element.project_Name}</p>
                    </div>
            
                    <div className="cont cont2">
                        <label for="assignname">Assigned to</label>
                        <p>{user}</p>
                    </div>
            
                </div>
            
                <div className="row row2">
                    <div className="cont cont3">
                        <label for="fromdate">From</label>
                        <p>{element.from}</p>
                    </div>
            
                    <div className="cont cont4">
                        <label for="todate">To</label>
                        <p>{element.to}</p>
                    </div>
            
                </div>
            
                <div className=" row3">
                    <label for="descrip">Description</label>
                    <p>{element.description}</p>
            
                </div>
            
                <div className="row4">
                    <a href="./editpage.html" className="editbtn"><input type="submit" value="Edit"/></a>
                    <a href="" className="okbtn"><Link to="/Dashboard"><input type="submit" value="Ok"/></Link></a>
                </div>
            </div>)
            })
        }

    </div>

    
</div>)


async function getSingleProjectDetail()
{
    await fetch("https://freelancerlogging.azurewebsites.net/admin/showProject/"+props.projectid, 
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
        var arrTemp=[];
        arrTemp.push(response.projectDetails)
        setprojctdetls(arrTemp);
      })
      .catch(err => {
        console.log(err);
      });
  }
}


export default ViewPage;