import React, { Component, Fragment } from "react"
import Navbars from "../../components/navbar"
import FeedCard from "../../components/feedCard"

class Feed extends Component {
    render(){
        return(
           <Fragment>
               <Navbars />
               <FeedCard />
               
           </Fragment> 
        )
    }
}

export default Feed