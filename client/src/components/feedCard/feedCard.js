import React, { Component, Fragment } from "react"
import "./feedCard.css"

class feedCard extends Component {
    render() {
        return (
        <Fragment>
            <div className="row">
                <div className="col s3"></div>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Username</span>
                                <p>I am a very simple card. I am good at containing small bits of information.
                                    I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                <div className="col s3"></div>
            </div>
        </Fragment>

        )
    }
}

export default feedCard
