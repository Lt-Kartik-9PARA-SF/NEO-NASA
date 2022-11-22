import React from 'react'

export default function DataCard(props) {
  return (
    <div className='dataItemsContainer'>

    <div className='dataItems'>
    <h3> NAME : {props.name}</h3>
    <p>ID : {props.id}</p>
    <p>N.E.O ID : {props.neoId}</p>
    <a href={props.url} target="_blank">Nasa JPL Refrence</a>
    <p ><b>HAZARDOUS ASTEROID</b> : <span className= {props.hazard.toString()}> {props.hazard.toString().toUpperCase()}</span></p>
    <p>DIAMETER : {Math.ceil(props.diameter)}Km</p>
    <h4>CLOSE APPROACH DATA</h4>
    <p>Close Approach Date : {props.closeApproachDate}</p>
    <p>Distance From Earth : {Math.round(props.miss_distance)}Km</p>
    <p>Orbiting Body : {props.orbitingBody}</p>
    </div>

    </div>
   
  )
}
