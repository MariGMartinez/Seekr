import React, { Component, Fragment } from "react"
import { Col, Card } from "react-materialize"
import "./feedCard.css"

class feedCard extends Component {
    render() {
        return (
            <Fragment>
                <Col m={12} s={12} id="cardCol">
                    <Card className='blue-grey darken-1 card'  textClassName='white-text' title='Card title' >
                        I am a very simple card.
                    </Card>
                </Col>
            </Fragment>

        )
    }
}

export default feedCard
