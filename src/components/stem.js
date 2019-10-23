import React from 'react';
import "./stemStyle.css"
import Leaves from './Leaves'


const Stem = () => {
	return(
    <div className="stemContainer">
      <div
      className="leftStem">
      </div>
      <Leaves></Leaves>
      <div
      className="rightStem">
      </div>
    </div>
  )
}

export default Stem
