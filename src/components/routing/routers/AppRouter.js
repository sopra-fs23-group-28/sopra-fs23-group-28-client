import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import BigScreenView from 'components/views/big-screen-view'
import Lobby from 'components/views/lobby'
import Login from 'components/views/Login'
import NotFound from 'components/views/not-found'
import Overview from "components/views/overview"
import ChooseAvatar from "components/ui/choose-avatar";
import Winner from "components/views/winner";



const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/game/:sessionPin">
          <Route path="/game/:sessionPin/avatar" element={<ChooseAvatar />} />
          <Route index element={<Overview />} />
        </Route>

        <Route path="/big-screen-view/:sessionPin" element={<BigScreenView />} />

        <Route path="/4" element={<Winner />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
