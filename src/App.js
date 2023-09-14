import Header from "./Header";

import data from "./data";

import Card from "./Card";

import "./App.css";

function App() {
  return (
    <>   
    <Header />
    <div className="App">
      {data.map(({ name, img }) => (
        <Card name={name} img={img} />
      ))}
    </div>
    </>
  );
}

export default App;
