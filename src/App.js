import { Container } from "@mui/material";
import Appbar from "./components/appbar/Appbar";
import Router from "./router/Router";

function App() {
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.onkeydown = function (e) {
    if (e.keyCode === 123) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
      return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
      return false;
    }
    if (e.ctrlKey && e.keyCode === 85) {
      return false;
    }
  };
  return (
    <div className="relative">
      <Appbar />
      <Container className="pt-[70px]">
        <Router />
      </Container>
    </div>
  );
}
export default App;
