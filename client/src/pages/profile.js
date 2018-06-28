import React, { Component, Fragment } from "react"
import Navbar from "../components/navbar"
import ProfileCard from "../components/profileCard"
import UserStats from "../components/userStats"
import FavHikes from "../components/favHikes"
import trails from ".././trails.json";

class Profile extends Component {

    state = {
        trails
      };
    
    render(){
        return(
           <Fragment>
               <Navbar />
               <ProfileCard />
               <UserStats />
               {this.state.trails.map(trail => (
          <FavHikes
            name={trail.name}
          />
        ))}
              
               
           </Fragment> 
        )
    }
}

export default Profile