import React, { Component, Fragment } from "react"
import Navbar from "../components/navbar"
import ProfileCard from "../components/profileCard"

class EditProfile extends Component {
    render(){
        return(
           <Fragment>
               <Navbar />
               edit profile page
               <ProfileCard />
           </Fragment> 
        )
    }
}

export default EditProfile