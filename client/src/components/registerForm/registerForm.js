import React, { Component, Fragment } from 'react'
import './registerForm.css'

class Register extends Component {
    render() {
        return (
        <Fragment>
        <form className="col s6">
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
                <div className="col s4">
                <button class="btn waves-effect waves-light" type="submit" name="action">Submit</button>
                </div>
            <div className="col s4"></div>
            
        </div>

        </Fragment>

        )
    }
}

export default Register