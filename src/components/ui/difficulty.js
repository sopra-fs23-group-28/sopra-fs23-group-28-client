/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import { api } from 'helpers/api';

import 'styles/views/difficulty.scss'


const Difficulty = (props) => {

  const {socket} = props
  const [reload, setReload] = useState(0)

  // set default degree (360*8)
  let degree = 2880

  useEffect(() => {
        const randomDegree =localStorage.getItem('deg')
        let totalDegree = degree + randomDegree //(get from s)

        document.getElementById("inner-wheel").style.transform = "rotate(" + totalDegree + "deg)"

        // highlight winner
        let half = 0
        randomDegree - 180 > 0 ? half = 0 : half = 1

        let diff = getDifficulty(randomDegree)

        setTimeout(() => {
          document.getElementsByClassName(`fa ${diff.toLowerCase()}`)[half].style.cssText = highlightStyles
          }, 6000
        )

        // change view to category
        setTimeout(() => {
          return (
            
            props.setGameState('rc'))
          }, 8000
        )


        // nice-to-have feature that I might add later on
        /* make the spin btn tilt every
        time the edge of the section hits 
        the indicator */
        
        // document.getElementsByClassName("sec").forEach(() => {
        //   let t = this
        //   let noY = 0
          
        //   let c = 0
        //   let n = 700
        //   let interval = setInterval(() => {
        //     c++
        //     if (c === n) {
        //       clearInterval(interval)			
        //     }
            
        //     var aoY = t.offset().top
            
        //     /* 23.7 is the minumum offset number that 
        //     each section can get, in a 30 angle degree.
        //     So, if the offset reaches 23.7, then we know
        //     that it has a 30 degree angle and therefore, 
        //     exactly aligned with the spin btn */
        //     if(aoY < 23.89){
        //       setTimeout(() => {}, 100)
        //     }
        //   }, 10)
    
        //   noY = t.offset().top
        // })

  }, [])

  const highlightStyles = `
    color: white;
    text-decoration: underline;
    text-underline-offset: 4px;
  `  
  const getDifficulty = (ranD) => {
    if (ranD % 180 > 120) {
      return "EASY"
    } else if (ranD % 180 > 60){
      return "MEDIUM"
    } else {
      return "HARD"
    }
  }
  return (
    <div className="difficulty-container">
      <h1 className="title">Surrender to the Wheel of Fate</h1>
      <div className="hero-div">
        <div className="wheel">
          <div id="inner-wheel">
            <div className="sec"><span className="fa easy">Easy</span></div>
            <div className="sec"><span className="fa medium">Medium</span></div>
            <div className="sec"><span className="fa hard">Hard</span></div>
            <div className="sec"><span className="fa easy">Easy</span></div>
            <div className="sec"><span className="fa medium">Medium</span></div>
            <div className="sec"><span className="fa hard">Hard</span></div>
          </div>
          {/* TODO check host token */}
          <button id="spin" disabled={((localStorage.getItem('pin')) ? false : true)}>
            <div id="inner-spin"></div>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Difficulty
