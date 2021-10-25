import React from "react";
import Home from "./screens/Home";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </>
  );
}

export default App;
