import "./style.css"

function Dashboard(){
    return(
        <>
                {/* <!-- Main Container --> */}
    <nav className="navbar">
      <button className="login-btn" type="button">Logout</button>
    </nav>
    <div className="container">

        {/* <!-- Left side container (inputs/submit/form)--> */}
        <div className="leftcontainer flex-container">
          <table style={{width:"100%"}}>
            <tr>
              <th>Image</th>
              <th>Full Name</th>
              <th>Age</th>
              <th>Date</th>
            </tr>
            <tr>
              <td><img className="userimage-dashboard" src="./img/maryammirzakhani.jpg" /></td>
              <td><a className="username-dashboard" href="#">Maryam mirzakhani</a></td>
              <td>40</td>
              <td>1402/06/04</td>
            </tr>
          </table>
            
        </div>

        {/* <!-- right side container (table) --> */}
        <div className="rightcontainer flex-container">
            
        </div>
    </div>
        </>
    )
}

export default Dashboard