import React, { Component, Fragment } from "react"
import FeedCard from "../../components/feedCard"
import Navbar from "../../components/navbar"

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