import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
<button type="button" className="nav-item btn" onClick={() => setHomeDisplay("about")}>About Me</button>
            </li>
            <li className="nav-item">
<button type="button" className="nav-item btn" onClick={() => setHomeDisplay("proj")}>My Work</button>
            </li>
            <li className="nav-item">
<button type="button" className="nav-item btn" onClick={() => setHomeDisplay("contact")}>Contact Info</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default App;
