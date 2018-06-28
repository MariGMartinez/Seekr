import React, { Component, Fragment } from 'react'
import { Col, Card, Row, Input, Button } from 'react-materialize'
import '../login/login.css'

class Login extends Component {
    render() {
        return (
            <Fragment>
                <div id="centerInfo">
                    <Col m={8} s={12}>
                        <Card className='blue-grey darken-1' textClassName='white-text' title='Login' >
                            <Row>
                            <Input type="email" label="Email" s={12} />
                            <Input type="password" label="Password" s={12} />
                            <div id="loginBtnDiv">
                                <Button waves='light' >Submit</Button>
                            </div>
                            </Row>
                        </Card>
                    </Col>
                </div>
            </Fragment>
        )
    }
}

export default Login
