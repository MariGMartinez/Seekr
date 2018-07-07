import React, { Component, Fragment } from "react"
import { USER } from "../../utils";
import { Link } from "react-router-dom";
import { Row, Col, Input, Button } from 'react-materialize'
import LoginButton from "../../components/LoginButton"
import LogoutButton from "../../components/LogoutButton"
import MapHike from "../../components/MapHike"

class CurrentHike extends Component{
render(){
    return(
        <MapHike/>
    )
}
}

export default CurrentHike