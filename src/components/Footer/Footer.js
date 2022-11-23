import React from "react";
export default function NavBar (){
    return (
        <div>
            <div id='footerMainDiv'>
            <div>
                <img alt='Open' className="footerImage" src={require('../../images/open.png')} />
                <h5>Grow</h5>
                <p>Use square capital to increase inventory or open a new location</p>

            </div>
            <div>
                <img alt='clock' className="footerImage" src={require('../../images/clock.png')} />
                <h5>Fast</h5>
                <p>Use square capital to increase inventory or open a new location</p>

            </div>
            <div>
                <img alt='dollars' className="footerImage" src={require('../../images/dollar.png')} />
                <h5>Easy</h5>
                <p>Use square capital to increase inventory or open a new location</p>

            </div>
            <div>
                <img alt='graph' className="footerImage" src={require('../../images/line-chart.png')} />
                <h5>Flexible</h5>
                <p>Use square capital to increase inventory or open a new location</p>

            </div>
            </div>


        </div>
    )
}


