import Header from "./Header";
import Navbar from "./NavBar";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";
import { ProjectDataProps } from "../stores/ProjectDataProps";
import ProjectsData from "../stores/ProjectData.json";
import parse from "html-react-parser";

function App() {
  return (
    <>
      <Header />
      <Navbar />

      <section className="container mx-auto">
        <Introduction />
        <Skills />
        {ProjectsData.map((project: ProjectDataProps) => (
          <Projects
            key={project.title}
            title={project.title}
            img={project.img}
            imgDescription={project.imgDescription}
            left={project.left}
          >
            {parse(project.discription)}
          </Projects>
        ))}
      </section>
    </>
  );
}

export default App;
