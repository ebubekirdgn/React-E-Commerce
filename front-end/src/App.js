import "./App.css";
import { BrowserRouter as Router, Route, Routes,Link  } from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </Router>
  );
}
function Home() {
  return <h2>Home</h2>;
}
export default App;
