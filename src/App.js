import Heartlogo from "./heart.svg";
import "./App.css";

const Header = () => {
  return (
    <div className="App-header">
      <h1>I ❤️ React</h1>
    </div>
  );
};

const message = "cool cud";
const Heart = (props) => {
  return (
    <div className="heart">
      <img className="heart-img" src={Heartlogo} alt="heart" />
      <p className="heart-message">{props.msg}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <Heart msg={message} />
    </>
  );
}

export default App;
