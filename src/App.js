import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";

import "./App.scss";

const Books = () => {
  return (
    <div>
      <h1>Hola soy el libro q elegiste</h1>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Home />}>
          <Route path="/books" element={<Books />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
