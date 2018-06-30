import React, { Component, Fragment } from "react"
import ProfileCard from "../components/profileCard"
import EditProfileForm from "../components/editProfileForm"
import Navbar from "../components/navbar"


class EditProfile extends Component {
    render(){
        return(
           <Fragment>
               <Navbar />
               edit profile page
               <ProfileCard />
               <EditProfileForm />
           </Fragment> 
        )
    }
}

export default EditProfile