import NavContainer from "./components/NavContainer";
import Footer from "./components/Footer";
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div>
      <NavContainer />
      <Footer id = "main-footer"/>
    </div>
  );
}

export default App;
