import logo from "./logo.svg";
import "./App.css";
import Profilecomponent from "./profile/Profilecomponent";

function App() {
  const myFunction = () => {
    var x = document.createElement("IMG");
    x.setAttribute(
      "src",
      "https://www.mustseespots.com/norway/img/pulpit-rock-1.jpg"
    );
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  };
  const alertProfile = () => {
    alert("Samir Missaoui");
  };
  const styleObject = { color: "red", textAlign: "center" };
  return (
    <div className="App" style={styleObject}>
      <Profilecomponent
        studentName="Samir Missaoui"
        age={28}
        Profession="Engineer and a Web Developer"
        myFunction={myFunction}
        alertProfile={alertProfile}
      />
    </div>
  );
}

export default App;
