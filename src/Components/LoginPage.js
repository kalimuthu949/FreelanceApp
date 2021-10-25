import '../CSS/Admin.css';
import logo from "../Images/TechnoRUCS Final.png"
import UserLogin from "../Images/Userlogin.png"
import passwordlogin from "../Images/passwordlogin.png"
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="loginpage">
        <div class="leftcont">
            <img src={logo} alt=""/>
        </div>
        <div className="rightcont">
            <div className="userinput input">
                <p>Username</p>
                <div className="inputbox">
                    <img src={UserLogin} alt=""/>
                    <input type="text"/>
                </div>
            </div>

            <div className="passwordinput input">
                <p>Password</p>
                <div className="inputbox">
                    <img src={passwordlogin} alt=""/>
                    <input type="password"/>
                </div>
            </div>

            <div className="loginbutton">
                <a href="#" onClick={testfunction}>
                  <Link to="/Dashboard">
                    <button>Login</button>
                  </Link>
                </a>
            </div>
        </div>
    </div>
  );

  async function testfunction()
  {
    await fetch("https://freelancerlogging.azurewebsites.net/admin/login?Username=BOSS&Password=boss321", 
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
        console.log(response);
        alert("");
        await [];
      })
      .catch(err => {
        console.log(err);
      });
  }

}

export default LoginPage;
