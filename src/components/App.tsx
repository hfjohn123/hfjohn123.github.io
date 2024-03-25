import Header from "./Header";
import Navbar from "./NavBar";
import Introduction from "./Introduction";
import Skills from "./Skills";
import Projects from "./Projects";
import { ProjectDataProps } from "../stores/ProjectDataProps";
import ProjectsData from "../stores/ProjectData.json";
import parse from "html-react-parser";
import Footer from "./Footer";
function App() {
  return (
    <>
      <Header />
      <Navbar />

      <section className="flex flex-col pt-20 gap-20 px-5 container mx-auto prose-stone lg:prose-p:prose-xl lg:prose-headings:prose-2xl prose-headings:font-bold lg:prose-ul:prose-xl prose-ui:my-0 prose-li:my-0 prose-a:underline">
        <Introduction />
        <Skills />
        {ProjectsData.map((project: ProjectDataProps) => (
          <Projects
            key={project.title}
            title={project.title}
            img={project.img}
            imgUrl={project.imgUrl}
            imgDescription={project.imgDescription}
            left={project.left}
          >
            {parse(project.discription)}
          </Projects>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
