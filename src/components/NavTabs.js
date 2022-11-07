export default function NavTabs({selectedNav, setHomeDisplay}) {
    return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-brand btn" onClick={() => setHomeDisplay('home')}>
              Home
            </button>
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
    <button type="button" className="nav-item btn" onClick={() => setHomeDisplay('about')}>About Me</button>
                </li>
                <li className="nav-item">
    <button type="button" className="nav-item btn" onClick={() => setHomeDisplay('proj')}>My Work</button>
                </li>
                <li className="nav-item">
    <button type="button" className="nav-item btn" onClick={() => setHomeDisplay('contact')}>Contact Info</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
}