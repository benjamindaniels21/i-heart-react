import "./App.css";
import Header from "./components/Header";
import Heart from "./components/Heart";

const message = "cool cud";

function App() {
  return (
    <>
      <Header />
      <Heart msg={message} />
    </>
  );
}

export default App;
