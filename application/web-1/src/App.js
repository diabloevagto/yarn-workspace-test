import { useCount } from "packages-hooks";

import "./App.css";

function App() {
  const count = useCount();

  return (
    <div className="App">
      <header className="App-header">
        <h1>web-1</h1>
        <p>{count}</p>
      </header>
    </div>
  );
}

export default App;
