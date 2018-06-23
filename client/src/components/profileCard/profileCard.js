import React, { Component, Fragment } from "react";
import logo from '../../images/fish.jpg';
import "./profileCard.css";


class profileCard extends Component {
    render() {
        return (
        <Fragment>
            <div className="row">
                <div className="col s3"></div>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <img src={logo}  className="circle profilePic" alt="Logo" />;
                            <div className="card-content white-text center-align">
                                {/* data for username goes here */}
                                <span className="card-title">Username</span>
                                {/* data for location goes here */}
                                <p> location </p>
                            </div>
                        </div>
                    </div>
                <div className="col s3"></div>
            </div>
        </Fragment>

        )
    }
}

export default profileCard

