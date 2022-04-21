import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button background={"#2490FF"} color={"white"} border={"none"}>
        Primary Button
      </Button>
      <Button background={"white"} color={"black"} border={"1px solid black"}>
        Default Button
      </Button>
      <Button background={"white"} color={"black"} border={"0.5px dashed"}>
        Dashed Button
      </Button>
      <br />
      <Button background={"white"} color={"black"} border={"none"}>
        Text Button
      </Button>
      <Button background={"white"} color={"blue"} border={"none"}>
        Link Button
      </Button>
    </div>
  );
}

export default App;