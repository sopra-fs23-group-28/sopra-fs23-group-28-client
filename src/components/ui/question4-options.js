import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import Timer from './helpers/timer';
import 'styles/views/question4-options.scss'

const Question4Options = (props) => {
  // init the Socket passed from the overview
  const {socket} = props;
  //Setup the states
  const [reload, setReload] = useState(0)
  const [round, setRound] = useState({
    "categories": [
      "",
      "",
      ""
    ],
    "chosenCategory": null,
    "answers": [
      "",
      "",
      "",
      ""
    ],
    "currentQuestion": ""
  });
  const [time, setTime] = useState(0);
  const room = localStorage.getItem('pin')
  
  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;

    socket.on("ROUND", (s) => {  
      if (s.message.length===1){
        fetchData(parseInt(s.message))
      }
      //

    });
    if (reload){
      socket.emit("TIMERSTOPQUESTION", {room},);
    }

    const fetchData = (data) => {

      api.get('/lobbies/' + localStorage.getItem('pin')+'/rounds').then(getU => {
        if (isMounted) {
          let temp =getU.data 
          temp.categories = temp.categories.map((i,ind) => i.replaceAll('_', ' ').toUpperCase())
          if (data) {
            document.getElementsByClassName(`question4-options-answer${(data)} button`)[0].name="chosen";
          }
          setRound(temp)
        }
      })

    }

    fetchData()
    // Clean-up:    
    return () => {
      isMounted = false;

    }
  }, [reload]);

  // Handle the put answer to the backend
  const chosenAnswer = async (i) => {
    const token = localStorage.getItem('token')
    const answerIndex = i
    const requestBody = JSON.stringify({token, answerIndex, time});
    await api.put('/lobbies/' + localStorage.getItem('pin')+'/answers', requestBody);
  }

  const handleCLick = (i) => {
    // disable all buttons
    document.getElementsByClassName("question4-options-answer1 button")[0].disabled=true;
    document.getElementsByClassName("question4-options-answer2 button")[0].disabled=true;
    document.getElementsByClassName("question4-options-answer3 button")[0].disabled=true;
    document.getElementsByClassName("question4-options-answer4 button")[0].disabled=true;

    // for highlighting the selected button
    document.getElementsByClassName(`question4-options-answer${i} button`)[0].name="selected";

    // save answer
    chosenAnswer(i)
  }

  return (
    <><div className="question4-options-container">
      <div className="question4-options-question-div">
        <h1 className="question4-options-question">
          Question?
          <br></br>
          {round.currentQuestion}
        </h1>
      </div>
      <div className="question4-options-answers-div">
        <button className="question4-options-answer1 button"
          onClick={() => handleCLick(1)}>
          <p className="question4-options-answer-text">
            {round.answers[0]}
          </p>
        </button>
        <button className="question4-options-answer2 button"
          onClick={() => handleCLick(2)}>
          <p className="question4-options-answer-text">
            {round.answers[1]}
          </p>
        </button>
        <button className="question4-options-answer3 button"
          onClick={() => handleCLick(3)}>
          <p className="question4-options-answer-text">
            {round.answers[2]}
          </p>
        </button>
        <button className="question4-options-answer4 button"
          onClick={() => handleCLick(4)}>
          <p className="question4-options-answer-text">
            {round.answers[3]}
          </p>
        </button>
      </div>
    </div>
    <Timer socket={socket} setGameState={props.setGameState} setReload={setReload} time={[15,18]} setTime={setTime}  state={'rc'} />
    </>
  )
}

export default Question4Options
