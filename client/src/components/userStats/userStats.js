import React, { Component, Fragment } from "react"
import { Col, Card, Row } from "react-materialize"
import Hiked from "../../images/hiked.png"
import Badge from "../../images/badge.png"
import Trek from "../../images/trek.png"
import {USER} from "../../utils";
import "./userStats.css";


class userStats extends Component {
    state = {
        trails: [],
        isLoggedIn: sessionStorage.isLoggedIn,
        userId: sessionStorage.userId,
        userAc:[]
      }; 
      componentWillMount(){
        this.loadUser(this.state.userId)
        
      }
    loadUser =(id)=>{
        USER.getUser(id)
            .then(res=>{
                this.setState({userAc: res.data})
                console.log(res.data)
                
            })
    }
    render() {
        return (
            <Fragment>
                <Card className='small'>
                    <Row className=''>
                    <Col s={4} className='center-align '  >
                        <img src={Trek}width={50} height={50} />
                        <div>{this.state.userAc.treks}||0</div>
                        <div>treks</div>
                    </Col>
                    <Col s={4} className='center-align '  >
                        <img src={Hiked}width={50} height={50} />
                        <div>{this.state.userAc.milesHiked}</div>
                        <div>miles hiked</div>
                    </Col>
                    <Col s={4} className=' center-align ' >
                        <img src={Badge}width={50} height={50} />
                        <div>{this.state.userAc.badges}||0</div>
                        <div>badges</div>
                    </Col>
                </Row>
                </Card>

            </Fragment>

        )
    }
}

export default userStats
