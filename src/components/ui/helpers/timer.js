import { useEffect, useState } from "react";

// Timer can help us, that each player has the same amount of time.
const Timer = (props) => {
  let timer =0;  
  const room = localStorage.getItem('pin')  

  const getTime = () => {
    if (timer===props.time[0]) {
      props.setReload(true)
      timer+=1;
    } else if (timer===props.time[1]-1) {
      props.socket.emit('ROUND',{room})
      timer+=1;
    }  else if (timer===props.time[1]) {
      props.setGameState(props.state)

    } 
    else {timer+=1;}
    props.setTime(timer);
  }

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (<>
  </>)           
   
}


export default Timer