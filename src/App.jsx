import Body from './components/Body';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import TracingBeam from './components/tracingbeam.jsx';
import WorkExperience from './components/WorkExperience.jsx';
import Introduction from './components/introduction.jsx';

function App() {
  return (
    <>
      <TracingBeam className="h-full">
        <div id="home">
          <Body />
        </div>
        <div id='about'>
          <Introduction />
        </div>
        <div id="work-experience">
          <WorkExperience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </TracingBeam>
    </>
  );
}

export default App;
