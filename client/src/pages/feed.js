import React, { Component, Fragment } from "react"
import Navbar from "../components/navbar"
import FeedCard from "../components/feedCard"

class Feed extends Component {
    render(){
        return(
           <Fragment>
               <Navbar />
               <FeedCard />
               
           </Fragment> 
        )
    }
}

export default Feed