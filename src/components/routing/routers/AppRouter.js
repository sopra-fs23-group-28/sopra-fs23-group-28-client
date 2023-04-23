import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import BigScreenView from 'components/views/big-screen-view'
import Rules from 'components/ui/rules'
import Lobby from 'components/views/lobby'
import Loader from 'components/views/loader'
import Login from 'components/views/Login'
import NotFound from 'components/views/not-found'
import GameRouter from "./GameRouter"
import Overview from "components/views/overview"
import ChooseAvatar from "components/views/choose-avatar";

import Question4Options from 'components/ui/question4-options';
import QuestionTrueFalse from 'components/ui/question-true-false';
import QuestionVoting from 'components/ui/question-voting';
import Category from "components/ui/category";
import Winner from "components/views/winner";


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/game/:sessionPin">
          <Route index element={<Overview />} />
          <Route path="choosing" element={<ChooseAvatar />} />
          <Route path="race/*" element={<GameRouter />} />
        </Route>

        <Route path="/big-screen-view/:sessionPin" element={<BigScreenView />} />

        <Route path="/rules" element={<Rules />} />
        <Route path="/loader" element={<Loader />} />

        {/* <Route path="/0" element={<Category />} />
        <Route path="/1" element={<Question4Options />} />
        <Route path="/2" element={<QuestionTrueFalse />} />
        <Route path="/3" element={<QuestionVoting />} />
        <Route path="/4" element={<Winner />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
