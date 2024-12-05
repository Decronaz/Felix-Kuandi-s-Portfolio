import "./App.css";
import SmoothScroll from "../Builds/Effects/Smooth_Scroll";
import Full_Page from "../Builds/Sections/Full_Page";
import MainTitle from "../Builds/Sections/Start_Title";
import Overlay from "../Builds/Sections/Overlay";

function App() {
  return (
    <>
      <Overlay />
      <SmoothScroll>
        {/* <MainTitle /> */}
        <Full_Page />
      </SmoothScroll>
    </>
  );
}

export default App;
