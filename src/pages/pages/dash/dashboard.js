import './DashboardPractice.css'
import myimage from '../../../images/download.png'

function Dashboard() {

    return (
        <div className="maincontainer">

            <div className="left">

                <div className="branddiv">
                    <img className="logo" src={myimage} alt="logo" />
                    <p className="brandname">ETERNAL GEMS 4LESS</p>
                </div>


                <div className="menudiv"></div>
                <div className="signoutdiv"></div>
            </div>

            <div className="right">

                <div className="righttop">

                </div>

                <div className="rightbottom">

                    <div className="cardtoprow">

                        <div className="card">Wedding ring set(STERLING SILVER) = GHC 750.00</div>
                        <div className="card">Wedding ring set(GOLD PLATED) = GHC 600.00 - 500.00</div>
                        <div className="card">Wedding ring set(GOLD PLATED) = GHC 600.00 - 500.00</div>
                        <div className="card">Wedding ring set(GOLD DUST) = GHC 350.00 - 450.00</div>

                    </div>

                    <div className="cardbottomrow">
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>

                    </div>

                </div>

            </div>

        </div>
    )

}


export default Dashboard;
