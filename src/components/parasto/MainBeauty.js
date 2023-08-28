import "./style.css"

function MainBeauty(){
    return(
        <>
    <div className="container">


        <div className="leftcontainer flex-container">
        <h3>Let's Go to make the future ;)</h3>

            <form action="#" >
              <input type="text" placeholder="Fisrt name"/>
              <input type="text" placeholder="Last name"/>
              <input type="number" placeholder="Age"/>
                <input type="file" name="image" alt="Image" placeholder="Upload your image"/>
                <button type="submit">submit</button>
            </form>
            
        </div>


        <div className="rightcontainer flex-container">
        </div>
    </div>
        </>
    )
}
export default MainBeauty