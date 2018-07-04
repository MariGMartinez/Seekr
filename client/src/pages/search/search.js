import React, { Component, Fragment } from 'react'
import { Helmet } from "react-helmet"
import { Input, Button, Card, Col } from 'react-materialize'
import Navbar from "../../components/navbar"

import '../search/search.css'



class TrailSearch extends Component {

    render() {

        const searchCSS = {
            searchBar: {
                backgroundColor: "white",
                borderRadius: "10px"
            }
        }

        window.onload = function(){
            document.getElementById("searchMapDiv").style.display = "none"
            document.getElementById("searchResultsDiv").style.display = "none"
        }
        function showResults(){
            document.getElementById("searchMapDiv").style.display = "block"
            document.getElementById("searchResultsDiv").style.display = "block"
        }
        return (
            <Fragment>
                <Helmet>
                    <style>{'body { background-color: #77AA99; }'}</style>
                </Helmet>
                <Navbar />
                <div className="trailSearchBar" >
                    <Input s={6} style = {searchCSS.searchBar} placeholder="  Where would you like to go?" />
                </div>
                <div id="submitBtn">
                    <Button id="trailSearchBtn" waves='light' onClick={showResults}>Submit</Button>
                </div>
                <div id="searchMapDiv"></div>
                <div id="searchResultsDiv">
                    <Col m={6} s={12}>
                        <Card className='blue-grey darken-1' textClassName='white-text' title='Card title' >
                            I am a very simple card.
                        </Card>
                    </Col>
                </div>
            </Fragment>
        )
    }
}

export default TrailSearch



