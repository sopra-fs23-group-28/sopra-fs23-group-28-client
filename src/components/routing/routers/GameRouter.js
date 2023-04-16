import {Redirect, Route, Routes} from "react-router-dom";
import PropTypes from 'prop-types';
import Winner from 'components/views/winner'
import Loader from 'components/views/loader'
import Rules from 'components/ui/rules'


const GameRouter = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Route exact path={`${props.base}`}>
        <Redirect to={`${props.base}/race`}/>
      </Route>
      <Route component={Loader} exact path="/loader" />
      <Route component={Rules} exact path="/rules" />
      <Route component={Winner} exact path="/winner" />

        {/* theorethical question type for now */}
        {/* <Route component={QuestionFillBlank} exact path="/question-fill-blank" /> */}
      </Routes>
    </>
  );
};


GameRouter.propTypes = {
  base: PropTypes.string
}

export default GameRouter;
