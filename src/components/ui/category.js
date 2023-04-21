import React from 'react'

import 'styles/views/category.scss'

const Category = (props) => {

  function handleClick(i) {
    document.getElementsByClassName("category-category1 button").disabled=true;
    document.getElementsByClassName("category-category2 button").disabled=true;
    document.getElementsByClassName("category-category3 button").disabled=true;

    document.getElementsByClassName(`category-category${i} button`);
  }

  return (
    <div className="category-container">
      <div className="category-titel-div">
        <h1 className="category-titel">
          Pick your poison
        </h1>
      </div>
      <div className="category-category-div">
        <button className="category-category1 button"
          onClick={handleClick("1")}
          disabled={false}>
          <p className="category-category-text">Category 1</p>
        </button>
        <button className="category-category2 button"
          onClick={handleClick("2")}
          disabled={false}>
          <p className="category-category-text">Category 2</p>
        </button>
        <button className="category-category3 button"
          onClick={handleClick("3")}
          disabled={false}>
          <p className="category-category-text">Category 3</p>
        </button>
      </div>
    </div>
  )
}

export default Category
