import React, {useState} from 'react';
import 'styles/views/Home.scss';
import BaseContainer from "components/ui/BaseContainer";

const Home = props => {

  return (
    <BaseContainer>
      <h1> SoPra FS23 Group 28</h1>
    </BaseContainer>
  );
};

/**
 * You can get access to the history object's properties via the withRouter.
 * withRouter will pass updated match, location, and history props to the wrapped component whenever it renders.
 */
export default Home;
