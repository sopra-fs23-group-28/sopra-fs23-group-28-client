import React from 'react'

import { Helmet } from 'react-helmet'

import 'styles/views/category.scss'

const Category = (props) => {
  return (
    <div className="category-container">
      <Helmet>
        <title>Category - SoPra Mockups</title>
        <meta property="og:title" content="Category - SoPra Mockups" />
      </Helmet>
      <div className="category-container1">
        <h1>
          <span>Pick Your Poison</span>
          <br></br>
        </h1>
        <div className="category-container2"></div>
      </div>
    </div>
  )
}

export default Category
