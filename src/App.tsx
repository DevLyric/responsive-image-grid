import i1 from "./assets/1.png";
import i2 from "./assets/2.jpg";
import i3 from "./assets/3.jpeg";

function App() {
  return (
    <div className="row">
      <div className="column">
        <img src={i1} alt="" />
        <img src={i3} alt="" />
        <img src={i2} alt="" />
      </div>
      <div className="column">
        <img src={i2} alt="" />
        <img src={i1} alt="" />
        <img src={i3} alt="" />
      </div>
      <div className="column">
        <img src={i3} alt="" />
        <img src={i2} alt="" />
        <img src={i1} alt="" />
      </div>
      <div className="column">
        <img src={i1} alt="" />
        <img src={i3} alt="" />
        <img src={i2} alt="" />
      </div>
    </div>
  );
}

export default App;
