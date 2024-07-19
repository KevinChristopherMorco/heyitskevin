import logo from "./logo.svg";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectContainer from "./components/Containers/ProjectContainer";

function App() {
  return (
    <>
      <Header />
      <div className="px-5 flex flex-col gap-y-32">
        <Hero />
        <About />
        <Skills />
        <ProjectContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
