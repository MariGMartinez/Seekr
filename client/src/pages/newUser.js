import React, { Component, Fragment } from "react"
import Register from "../components/registerForm"

class NewUser extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col s4"></div>
                        <div className="col s4">
                            <h3>Register</h3>
                        </div>
                    <div className="col s4"></div>
                </div>
                <Register />
            </Fragment>
        )
    }
}
            


export default NewUser