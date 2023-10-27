import Home from "./Page/Home";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
