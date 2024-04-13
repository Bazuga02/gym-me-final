import React from "react";

// import aos
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Banner from "./components/Banner";
import Header from "./components/Header";
import About from "./components/About";
import Workouts from "./components/Workouts";
import Pricing from "./components/Pricing";
import Community from "./components/Community";
import Faq from "./components/Faq";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Login from "./components/Login";

const App = () => {
  // aos initialization
  Aos.init({
    duration: 2500,
    delay: 400,
  });

  const [isLoginVisible, setIsLoginVisible] = React.useState(false);
  const showLogin = () => {
    setIsLoginVisible(true);
  };

  return (
    <div className="max-w-[1440px] mx-auto bg-page overflow-hidden relative">
      {<Header showLogin={showLogin} />}
      {!isLoginVisible && <Banner />}
      {!isLoginVisible && <About />}
      {!isLoginVisible && <Workouts />}
      {!isLoginVisible && <Pricing />}
      {!isLoginVisible && <Community />}
      {!isLoginVisible && <Faq />}
      {!isLoginVisible && <Join />}
      {isLoginVisible && <Login />}
      {!isLoginVisible && <Footer />}

      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
