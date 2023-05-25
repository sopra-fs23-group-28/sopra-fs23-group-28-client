import { useRef } from 'react'
import * as io from 'socket.io-client';
import { getSocketAdr } from 'helpers/getDomain';
import Component from './component';

const Overview = (props) => {
  // controlls the gamestate and which component is rendered
  const token = localStorage.getItem('token')
  const pin = localStorage.getItem('pin')
  //init socket.io
  
  const socket = useRef();
  socket.current = io(getSocketAdr(localStorage.getItem('ip')) + '?room=' + pin + '&token=' + token, {
      // headers: {
      //   'Access-Control-Allow-Origin': '*'
      // }
  })
  socket.current.on("connect", (e) => {
    // revert to classic upgrade
  })
  socket.current.on("connect_error", (e) => {
    // revert to classic upgrade
  })
  
  socket.current.on("disconnect", (e) => {
    // revert to classic upgrade
  })


  return (
    <Component socket={socket.current}/>
  )
}

export default Overview
