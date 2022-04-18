import "./App.css";
import Banner from "./Banner";
import Header from "./Header";
import Home from "./Home";

function App() {
  //BEM
  return (
    <div className="app">
      <Home />
      <Header />
      <Banner />
    </div>
  );
}

export default App;
