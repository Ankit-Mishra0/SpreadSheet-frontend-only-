import Navbar from "./components/Navbar.tsx";
import TopBar from "./components/TopBar.tsx";
import SpreadSheet from "./components/SpreadSheet.tsx";
import  { useState } from "react";

function App() {
   const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <Navbar />
      <TopBar  isHidden={isHidden} setIsHidden={setIsHidden}/>
      <SpreadSheet isHidden={isHidden}/>
    </>
  );
}

export default App;
