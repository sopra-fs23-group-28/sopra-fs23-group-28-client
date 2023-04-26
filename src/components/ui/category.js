import { api } from 'helpers/api';
import React from 'react'

import 'styles/views/category.scss'

const Category = (props) => {

  const token = localStorage.getItem("token")
  const lobbyId = localStorage.getItem("pin")
  
  const handleClick = (i) => {
    document.getElementsByClassName("category-category1 button")[0].disabled=true;
    document.getElementsByClassName("category-category2 button")[0].disabled=true;
    document.getElementsByClassName("category-category3 button")[0].disabled=true;

    document.getElementsByClassName(`category-category${i} button`)[0].name="selected";

    const submitResults = async (i) => {
      await api.put(`/lobbies/${lobbyId}/categories/${i}`, token)
    }

    try{submitResults(i)}
    catch (e){console.log(e);
    }
    console.log(i)
  }
  
  return (
    <div className="category-container">
      <div className="category-titel-div">
        <h1 className="category-titel">Pick your poison</h1>
      </div>
      <div className="category-category-div">
        <button className="category-category1 button"
          onClick={() => handleClick(1)}>
          <p className="category-category-text">Category 1</p>
        </button>
        <button className="category-category2 button"
          onClick={() => handleClick(2)}>
          <p className="category-category-text">Category 2</p>
        </button>
        <button className="category-category3 button"
          onClick={() => handleClick(3)}>
          <p className="category-category-text">Category 3</p>
        </button>
      </div>
    </div>
  )
}

export default Category
