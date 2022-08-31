import "./App.css";
import Slider from "./slider/Slider";

function App() {
  const button = (
    <img src="https://dev-from-design-to-dev.netlify.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcafe.2c2cf014.jpeg&w=640&q=75" />
  );

  const content = <p>Slide pour découvrir</p>;

  return (
    <div className="container">
      <Slider content={content} button={button} />
    </div>
  );
}

export default App;
