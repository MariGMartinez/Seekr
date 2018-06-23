import React, { Component, Fragment } from "react"
import Register from "../../components/registerForm"
import "../../components/registerForm/registerForm.css"

class NewUser extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col s2"></div>
                        <div className="col s8">
                            <h3 id="title">Register</h3>
                        </div>
                    <div className="col s2"></div>
                </div>
                <Register />
            </Fragment>
        )
    }
}
            


export default NewUser