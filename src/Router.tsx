import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({toggleDark, isDark}:IRouterProps) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/:coinId" element={<Coin isDark={isDark} />} />
        <Route path="/" element={<Coins toggleDark={toggleDark}  />} />
      </Routes >
    </BrowserRouter>
  );
}

export default Router;