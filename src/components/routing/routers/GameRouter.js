import {Navigate, Route, Routes} from "react-router-dom";
import Winner from 'components/views/winner'
import Loader from 'components/views/loader'
import Rules from 'components/ui/rules'
import Race from "components/ui/race";
import NotFound from "components/views/not-found";


const GameRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Race/>} />

        <Route path="/loader" element={<Loader/>} />
        <Route path="/rules" element={<Rules/>} />

        {/* <Route path="*" element={<Navigate to="/game/:sessionId/race"/>} /> */}

        <Route path="/winner" element={<Winner/>} />
      </Routes>
    </>
  );
};

export default GameRouter;
