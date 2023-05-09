import React, { useState, useEffect } from 'react'
import { api } from 'helpers/api';

import 'styles/views/difficulty.scss'


const Difficulty = (props) => {

  const {socket} = props
  const [reload, setReload] = useState(0)

  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true

    // socket.on("DIFFICULTY", (s) => {

    // })

  
  })

  // Handle the difficulty to the BackEnd
  const fate = async (d) => {
    const token = localStorage.getItem('token')
    const difficulty = d
    const requestBody = JSON.stringify({token, difficulty})
    await api.put('/lobbies/' + localStorage.getItem('pin')+'/difficulty', requestBody)
  }

  const highlightStyles = `
    color: white;
    text-decoration: underline;
    text-underline-offset: 4px;
  `

  // set default degree (360*8)
  let degree = 2880

  function spin (){    
    /* generate random number between 1 - 360, then add to the degree */
    let randomDegree = (Math.floor(Math.random() * (360 - 1 + 1)) + 1)
    let totalDegree = degree + randomDegree
    
    document.getElementById("inner-wheel").style.transform = "rotate(" + totalDegree + "deg)"
    // disable button
    document.getElementById("spin").disabled=true

    let sealed = ""
    // get difficulty
    if (randomDegree % 180 > 120) {
      sealed = "EASY"
    } else {
      (randomDegree % 180 > 60) ? sealed = "MEDIUM" : sealed = "HARD"
    }

    fate(sealed)

    // highlight winner
    let half = 0
    randomDegree - 180 > 0 ? half = 0 : half = 1
    setTimeout(() => {
      document.getElementsByClassName(`fa ${sealed.toLowerCase()}`)[half].style.cssText = highlightStyles
      }, 6000
    )
    
    // change view to question
    setTimeout(() => {
      // return <div socket={socket} setGameState={props.setGameState} setReload={setReload} state={'q4'} />
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
          <button id="spin" onClick={() => {spin()}}>
            <div id="inner-spin"></div>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Difficulty
