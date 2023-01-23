import { Route, Routes, BrowserRouter } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layouts/MainNavigation";

function App() {

  return (
    <BrowserRouter>
      <MainNavigation />
        <Routes>
          <Route path="/" element={<AllMeetupsPage />} />
          <Route path="/new-meetups" element={<NewMeetupsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
