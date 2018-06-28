import React, { Component, Fragment } from "react"
import { Row, Input, Card, CardTitle } from "react-materialize"
import "./editProfileForm.css"

class editProfileForm extends Component {
    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col s3"></div>
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <form>
                                    <label>
                                        First Name:
                                        <input type="text" name="first name" />
                                    </label>
                                    <label>
                                        Last Name:
                                        <input type="text" name="last name" />
                                    </label>

                                    <label>
                                        Birthdate
                                        <input label ="Birthdate" name='birthdate' type='date' onChange={function (e, value) { }} />
                                    </label>

                                    <input type="submit" value="Submit" />
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col s3"></div>
                </div>
            </Fragment>

        )
    }
}

export default editProfileForm