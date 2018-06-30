import React, {Component} from "react"
import bear from '../../images/achievements/Bear.png'
import backpack from '../../images/achievements/Backpack.png'
import bearpaw from '../../images/achievements/BearPaw.png'
import bike from '../../images/achievements/Bike.png'
import binoculars from '../../images/achievements/Binoculars.png'
import compass from '../../images/achievements/compass.png'
import fire from '../../images/achievements/Fire.png'
import firstaid from '../../images/achievements/FirstAid.png'
import flashlight from '../../images/achievements/Flashlight.png'
import helmetbackpack from '../../images/achievements/Helmet_Backpack.png'
import helmet from '../../images/achievements/Helmet.png'
import hikingboot from '../../images/achievements/HikingBoot.png'
import hotdogstick from '../../images/achievements/Hotdog_Stick.png'
import kayak from '../../images/achievements/Kayak.png'
import map from '../../images/achievements/Map.png'
import plateandfork from '../../images/achievements/PlateandFork.png'
import rope from '../../images/achievements/Rope.png'
import swissarmyknife from '../../images/achievements/SwissArmyKnife.png'
import thermocoffee from '../../images/achievements/ThermoCoffee.png'
import watch from '../../images/achievements/Watch.png'
import "./achievements.css"
class Achievements extends Component{
    render (){
        return <div> 
            <img className="size" src={backpack}/>
            <img className="size" src={bear}/>
            <img className= "size" src={bearpaw}/>
            <img className="size" src={bike}/>
            <img className="size" src={binoculars}/>
            <img className= "size" src={compass}/>
            <img className="size" src={fire}/>
            <img className= "size"src={firstaid}/>
            <img className= "size"src={flashlight}/>
            <img className="size"src={helmetbackpack}/>
            <img className="size"src={helmet}/>
            <img className="size"src={hikingboot}/>
            <img className="size"src={hotdogstick}/>
            <img className="size"src={kayak}/>
            <img className="size"src={map}/> 
            <img className="size"src={plateandfork}/>
            <img className="size"src={rope}/>
            <img className="size"src={swissarmyknife}/>
            <img className="size"src={thermocoffee}/>
            <img className="size"src={watch}/>
            </div>

    }
}

export default Achievements