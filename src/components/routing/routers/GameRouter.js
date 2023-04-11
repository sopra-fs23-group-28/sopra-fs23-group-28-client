import {Redirect, Route, Switch} from "react-router-dom";
import PropTypes from 'prop-types';
import Category from 'components/views/category'
import QuestionTrueFalse from 'components/views/question-true-false'
import Question4Options from 'components/views/question4-options'
import PunishmentSliderPlayerSelect from 'components/views/punishment-slider-player-select'
import Difficulty from 'components/views/difficulty'
import Winner from 'components/views/winner'
import QuestionFillBlank from 'components/views/question-fill-blank'
import Race from 'components/views/race'
import RandomEvent from 'components/views/random-event'
import QuestionVoting from 'components/views/question-voting'
import Loader from 'components/views/loader'
import Rules from 'components/views/rules'


const GameRouter = props => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Route exact path={`${props.base}`}>
        <Redirect to={`${props.base}/race`}/>
      </Route>

      <Route exact path={`${props.base}/race`}>
        <Race/>
      </Route>

      <Route component={Loader} exact path="/loader" />
      <Route component={Rules} exact path="/rules" />

      <Route component={Category} exact path="/category" />
      <Route component={Difficulty} exact path="/difficulty" />

      <Route component={Question4Options} exact path="/question4-options" />
      <Route component={QuestionVoting} exact path="/question-voting" />
      <Route component={QuestionTrueFalse} exact path="/question-true-false" />
      <Route component={RandomEvent} exact path="/random-event" />

      <Route component={PunishmentSliderPlayerSelect} exact path="/punishment-slider-player-select" />

      <Route component={Winner} exact path="/winner" />

      {/* theorethical question type for now */}
      {/* <Route component={QuestionFillBlank} exact path="/question-fill-blank" /> */}
    </div>
  );
};


GameRouter.propTypes = {
  base: PropTypes.string
}

export default GameRouter;
