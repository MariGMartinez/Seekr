import React, { Component, Fragment } from "react"
import { Button } from "react-materialize"
import "./landing.css"

class Landing extends Component {
    render(){
        return(
            <Fragment>
                <div id="landingBackground">
                    <div id="centerInfo">
                        <h1 id="title">Seekr</h1>
                        <Button waves='light' node='a' href='/register'> Begin Your Journey </Button>
                        <p>Already have an account? <a href="/login">Log In</a></p>
                    </div>
                </div>
            </Fragment>
        )
    }
}



export default Landing