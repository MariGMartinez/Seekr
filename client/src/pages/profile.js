import React, { Component, Fragment } from "react"
import ProfileCard from "../components/profileCard"
import GameBadgeCard from "../components/gameBadge"

class Profile extends Component {
    render(){
        return(
           <Fragment>
               profile page
               <ProfileCard />
               <GameBadgeCard />
               <GameBadgeCard />
               <GameBadgeCard />
           </Fragment> 
        )
    }
}

export default Profile