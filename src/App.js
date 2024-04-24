import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Workouts from "./components/Workouts";
import Pricing from "./components/Pricing";
import Community from "./components/Community";
import Faq from "./components/Faq";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LoginHeader from "./components/LoginHeader";
import SignUpHeader from "./components/SignUpHeader";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Banner />
              <About />
              <Workouts />
              <Pricing />
              <Community />
              <Faq />
              <Join />
              <Footer />
            </div>
          }
        />
        <Route
          path="/login"
          element={
            <div>
              <LoginHeader />
              <Login />
              <Footer />
            </div>
          }
        />
        <Route
          path="/signup"
          element={
            <div>
              <SignUpHeader />
              <Signup />
              <Footer />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
