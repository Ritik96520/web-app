import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import Onboarding1 from "./pages/Onboarding1";
import LoginFilled from "./pages/LoginFilled";
import RegisterFilled from "./pages/RegisterFilled";
import LoginEmpty from "./pages/LoginEmpty";
import PostLogin from "./pages/PostLogin";
import TrackingScreen from "./pages/TrackingScreen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/onboarding3":
        title = "";
        metaDescription = "";
        break;
      case "/login-filled":
        title = "";
        metaDescription = "";
        break;
      case "/register-filled":
        title = "";
        metaDescription = "";
        break;
      case "/login-empty":
        title = "";
        metaDescription = "";
        break;
      case "/post-login":
        title = "";
        metaDescription = "";
        break;
        case "/trackingScreen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Onboarding />} />
      <Route path="/onboarding3" element={<Onboarding1 />} />
      <Route path="/login-filled" element={<LoginFilled />} />
      <Route path="/register-filled" element={<RegisterFilled />} />
      <Route path="/login-empty" element={<LoginEmpty />} />
      <Route path="/post-login" element={<PostLogin />} />
      <Route path="Tracking-Screen" element={<TrackingScreen/>}/>
    </Routes>
  );
}
export default App;
