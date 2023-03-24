import Header from "./Components/Header"
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="flex justify-around items-center">
        <Card />
        <Card />
        <Card />

      </div>

    </div>
  );
}

export default App;
