import Navbar from "./components/Navbar.tsx";
import Details from "./components/Details.tsx";
import TopBar from "./components/TopBar.tsx";
import TableHeader from "./components/tableHeader.tsx";
import SpreadSheet from "./components/SpreadSheet.tsx";

function App() {
  return (
    <>
      <Navbar />
      <TopBar />
      <Details />
      <TableHeader />
      <SpreadSheet />
      </>
  );
}

export default App;
