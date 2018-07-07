import React, { Component, Fragment } from "react"
import { Helmet } from "react-helmet"
import ProfileCard from "../../components/profileCard"
import EditProfileForm from "../../components/editProfileForm"
import Navbar from "../../components/navbar"
import ProfilePic from "../../components/profilePic"


class EditProfile extends Component {
    render(){
        return(
           <Fragment>
               <Helmet>
                <style>{'body { background-color: #96b5c9; }'}</style>
               </Helmet>
               <Navbar />
               <ProfileCard />
               <ProfilePic />
               <EditProfileForm />
           </Fragment> 
        )
    }
}

export default EditProfile