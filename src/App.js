
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contacts from "./components/Contacts/contacts";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Intro></Intro>
      <Skills></Skills>
      <Works></Works>
      <Contacts></Contacts>
    </div>
  );
}

export default App;
