import "./style.css"

function Details(){
    return(
        <>

    <div className="container " >
        {/* <!-- Left side container (inputs/submit/form)--> */}
        <div className="leftcontainer flex-container">
          {/* <!-- image container --> */}
           <div className="img-details-container">

              <div>
                <p>Befor</p>
                <img className="img-details" id="befor-img" src="./img/ast.jpg" onclick="beforpop()"/>
              </div>

              <div>
                <p>After</p>
                <img className="img-details" id="after-img" src="./img/maryammirzakhani.jpg" onclick="afterpop()" />
              </div>
           </div> 
           {/* <!-- info container --> */}
           <div className="details-info glass">
            <div>
              <span>FirstName:</span>
              <span>Maryam</span>
            </div>
            <div>
              <span>LastName:</span>
              <span>Mirzakhani</span>
            </div>
            <div>
              <span>Age:</span>
              <span>40</span>
            </div>
            <div>
              <span>Date:</span>
              <span>1402/06/05</span>
            </div>
            <div>
              <button className="del-btn" type="button">DELETE</button>
            </div>
           </div>
        </div>

        {/* <!-- right side container (table) --> */}
        <div className="rightcontainer flex-container" id="rightcontainer">
        </div>
    </div>
        </>
    )
}

export default Details


// let befor = document.getElementById("befor-img");
//       let after = document.getElementById("after-img");
//       function beforpop(){
//         after.classList.remove("img-toggle")
//         let rightcontainer = document.getElementById("rightcontainer")
//         befor.classList.toggle("img-toggle")
//         rightcontainer.classList.toggle("rightcontainer-op")
//       }
//       function afterpop(){
//         befor.classList.remove("img-toggle")

//         let rightcontainer = document.getElementById("rightcontainer")
//         after.classList.toggle("img-toggle")
//         rightcontainer.classList.toggle("rightcontainer-op")
//       }