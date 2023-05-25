/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { api } from 'helpers/api';
import React, { useEffect, useState } from 'react'
import 'styles/views/category.scss'
import Timer from './helpers/timer';

const Category = (props) => {
  // setup Socket from overview
  const {socket} = props;
  //init States to save values
  const [reload, setReload] = useState(0)
  const [round, setRound] = useState({
    "categories": [
      "",
      "",
      ""
    ],
    "chosenCategory": null,
    "answers": [],
    "currentQuestion": null
  });
  const room = localStorage.getItem('pin')  
  const token = localStorage.getItem('token')

  useEffect(() => {

    // is Mounted to check if unmounted Objects exists.
    let isMounted = true;

    socket.on("CATEGORY", (s) => {  
      if (s.message === 'VOTINGDONE') {
        fetchData()
      }
    });
    if (reload){
      socket.emit("TIMERSTOPCATEGORY", {room},);
    }

    const fetchData = () => {

      api.get('/lobbies/' + localStorage.getItem('pin')+'/rounds').then(getU => {
        if (isMounted) {
          let temp =getU.data 
          console.log(getU)
          temp.categories = temp.categories.map((i,ind) => i.replaceAll('_', ' ').toUpperCase())
          if (temp.currentQuestion) {
            temp.chosenCategory =temp.chosenCategory.replaceAll('_', ' ').toUpperCase()
            document.getElementsByClassName(`category-category${(temp.categories.indexOf(temp.chosenCategory)+1)} button`)[0].name="chosen";
          }
          setRound(temp)
        }
      })

    }

    // To mount and unmount the component we have this function. if the component is unmounted, the API calls ar not going to change anything.
    fetchData()
    // Clean-up:    
    return () => {
      isMounted = false;

    }
  }, [reload]);

// Handle the category to the backend
  const chosenCategory = async (i) => {
    const requestBody = JSON.stringify({token});
    await api.put('/lobbies/' + localStorage.getItem('pin')+'/categories/'+i, requestBody);    
  }
  // Button click in the Category view
  const handleClick = (i) => {
    document.getElementsByClassName("category-category1 button")[0].disabled=true;
    document.getElementsByClassName("category-category2 button")[0].disabled=true;
    document.getElementsByClassName("category-category3 button")[0].disabled=true;

    document.getElementsByClassName(`category-category${i} button`)[0].name="selected";

    chosenCategory(i)


  }
  return (
    <><div className="category-container">
      <div className="category-titel-div">
        <h1 className="category-titel">Pick your poison</h1>
      </div>
      <div className="category-category-div">
        <button className="category-category1 button"
          onClick={() => handleClick(1)}>
          <p className="category-category-text">{round.categories[0]}</p>
        </button>
        <button className="category-category2 button"
          onClick={() => handleClick(2)}>
          <p className="category-category-text">{round.categories[1]}</p>
        </button>
        <button className="category-category3 button"
          onClick={() => handleClick(3)}>
          <p className="category-category-text">{round.categories[2]}</p>
        </button>
      </div>
    </div><Timer socket={socket} setGameState={props.setGameState} setReload={setReload} time={[6,9]}  state={'q4'}/></>
  )
}

export default Category
