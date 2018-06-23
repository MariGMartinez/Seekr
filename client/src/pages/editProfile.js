import React, { Component, Fragment } from "react"
import Navbar from "../components/navbar"
import ProfileCard from "../components/profileCard"
import EditProfileForm from "../components/editProfileForm"


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