import React, { Component, Fragment } from "react"
import { Row, Input, Card, CardTitle } from "react-materialize"
import "./editProfileForm.css"

class editProfileForm extends Component {
    render() {
        return (
            <Fragment>
                <div>
                    <Row>
                        <Input placeholder="John" s={6} label="First Name" />
                        <Input placeholder="Smith" s={6} label="Last Name" />
                        <Input type='textarea' s={12} label="Bio" />
                    </Row>
                </div>
            </Fragment>

        )
    }
}

export default editProfileForm