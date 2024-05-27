import './css/App.css';
import Navbar from './component/Navbar';
import PhotoSelection from './component/PhotoSelection';
import Description from './component/Description';
import SKills from './component/Skills';
import Project from './component/Project';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer'

let skillData=[
  {
    category:"Programming Languages",
    value:["C", "C++", "JavaScript", "Python"]
  },
  {
    category:"Web Development",
    value:["HTML", "CSS", "Node.js", "Express", "React"]
  },
  {
    category:"Databases",
    value:["MySQL", "MongoDB"]
  },

  {
    category:"Tools",
    value:["Git", "Github", "Docker", "Visual Studio Code"]
  }
];


function App() {
  const formKey=process.env.REACT_APP_FORM_KEY;


  return (
    
    <>
    
    <PhotoSelection/>
      <Navbar />
      <Description />

      <SKills data={skillData} />
      <Project/>
      <ContactForm formKey={formKey}/>
      <Footer/>
    </>
  );
}

export default App;
