// @ts-expect-error no types yet :(
import "./App.css";
import { Routes, BrowserRouter, Link, Route, useNavigate } from "react-router";
import "./components/solid-web-components.es";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Basic</Link>
          </li>
          <li>
            <Link to="/props">Props</Link>
          </li>
          <li>
            <Link to="/events">Events</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <c-basic onClick={() => console.log("clicked")} />
            </div>
          }
        />
        <Route
          path="/props"
          element={
            <div>
              <c-props my-message="hello from react!" />
            </div>
          }
        />
        <Route
          path="/events"
          element={
            <div>
              <c-event-handler />
            </div>
          }
        />
        <Route
          path="/counter"
          element={
            <div>
              <c-counter />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
