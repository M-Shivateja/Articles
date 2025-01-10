import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./Pages/Main";
function App() {
  return (
    <BrowserRouter className="bg-black">
      <Main />
    </BrowserRouter>
  );
}

export default App;
