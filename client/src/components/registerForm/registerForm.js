import React, { Component, Fragment } from 'react'
import { Row, Input, Button } from 'react-materialize'
import './registerForm.css'

class Register extends Component {
    render() {
        return (
        <Fragment>
            <div className="registerPage">

            <Row>
                <Input s={12} label="First Name" defaultValue={""} />
            </Row>
            <Row>
                <Input s={12} label="Last Name" defaultValue={""}/>
            </Row>
            <Row>
                <Input s={12} label="Email" defaultValue={""}/>
            </Row>
            <Row>
                <Input s={12} label="Create Password" defaultValue={""} />
            </Row>
            </div>
            <br></br>
            <br></br>
            <div id="submitBtn">
                <Button waves='light'>button</Button>
            </div>


        {/* <form className="col s6">
            <div className="row">
                <div className="col s2"></div>
                    <div className="input-field col s8">
                        <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                        <label htmlFor="textarea1">First Name</label>
                    </div>
                <div className="col s2"></div>
            </div>
            <div className="row">
                <div className="col s2"></div>
                    <div className="input-field col s8">
                        <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                        <label htmlFor="textarea1">Last Name</label>
                    </div>
                <div className="col s2"></div>
            </div>
            <div className="row">
                <div className="col s2"></div>
                    <div className="input-field col s8">
                        <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                        <label htmlFor="textarea1">Email</label>
                    </div>
                <div className="col s2"></div>
            </div>
            <div className="row">
                <div className="col s2"></div>
                    <div className="input-field col s8">
                        <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                        <label htmlFor="textarea1">Create Password</label>
                    </div>
                <div className="col s2"></div>
            </div>
        </form>

        <div className="row">
            <div className="col s4"></div>
                <div className="col s4" id="submitBtnDiv">
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            <div className="col s4"></div>
            
        </div> */}

        </Fragment>

        )
    }
}

export default Register