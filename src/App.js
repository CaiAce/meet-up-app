import { Route, Routes, BrowserRouter } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layouts/MainNavigation";
import Layout from "./components/layouts/Layout";
import { FavoritesContextProvider } from "./store/favorites-context";

function App() {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<AllMeetupsPage />} />
            <Route path="/new-meetups" element={<NewMeetupsPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </FavoritesContextProvider>
  );
}

export default App;
