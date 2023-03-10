import "./App.css";
import { Routes, Route } from "react-router-dom";


import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import BudgetPage from "./pages/BudgetPage/BudgetPage"
import Homepage from "./pages/HomePage/HomePage";






import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import PodcastPage from "./pages/PodcastPage/PodcastPage";
// import Sidebar from "./components/SideBar/SideBar";
import SideBarApp from "./components/SideBarApp/SideBarApp";





function App() {
  return (
    <div className="App"> 

 <SideBarApp/>
      <Routes>
        <Route
          path="/"
          element={
              <Homepage />
          }
        />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
       
        <Route
          path="budget"
          element={
            <IsPrivate>
              <BudgetPage />
            </IsPrivate>
          }
        />
        <Route
          path="Podcasts"
          element={
            <IsPrivate>
              <PodcastPage />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
