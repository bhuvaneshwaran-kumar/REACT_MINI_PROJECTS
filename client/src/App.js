import { useEffect } from "react";
import Nav from "./components/nav/Nav";
function App() {
  useEffect(() => {
    fetch("http://localhost:8080/api/auth")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div className="App">
      <Nav />
      <div style={{ height: "200vh" }}>
        <span style={{ position: "sticky", top: "0" }}>Hello World</span>
      </div>
    </div>
  );
}

export default App;
