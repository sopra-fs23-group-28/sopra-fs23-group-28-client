import {Redirect, Route, Routes} from "react-router-dom";
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
import NotFound from 'components/views/not-found'


const GameRouter = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Race/>} />

        <Route component={Loader} path="/loader" />
        <Route component={Rules} path="/rules" />

        <Route component={Category} path="/category" />
        <Route component={Difficulty} path="/difficulty" />

        <Route component={Question4Options} path="/question4-options" />
        <Route component={QuestionVoting} path="/question-voting" />
        <Route component={QuestionTrueFalse} path="/question-true-false" />
        <Route component={RandomEvent} path="/random-event" />

        <Route component={PunishmentSliderPlayerSelect} path="/punishment-slider-player-select" />

        <Route component={Winner} path="/winner" />

        <Route path="*" element={<NotFound/>} />

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
