import './css/App.css';
import Navbar from './component/Navbar';
import PhotoSelection from './component/PhotoSelection';
import Description from './component/Description';
import SKills from './component/Skills';
import Project from './component/Project';
import ContactForm from './component/ContactForm';
import Footer from './component/Footer'
// import { useState,useEffect } from 'react';
// import { motion } from "framer-motion"


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
    {/* {pageLoaded?(<> */}
    <PhotoSelection/>
      <Navbar />
      <Description />

      <SKills data={skillData} />
      <Project/>
      <ContactForm formKey={formKey}/>
      <Footer/>
    {/* </>
    ):(<div style={{
      width:"100vw",
      height:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      flexDirection:"column"
    }}><motion.div style={{
      height:"3vw",
      width:"3vw",
      backdropFilter:"blur(10px)",
      // background:"white",
      // boxShadow:"2px 2px red",
      border:"20px dashed red",

      borderRadius:"50%"

    }}
    animate={{
      
      rotate: [0, 360],
      borderRadius: ["20%", "50%"],
    }}
    transition={{
      duration: 2, // Duration of each loop
      repeat: Infinity, // Repeat infinitely
      ease: "linear", // Linear easing
    }}
  />
      <motion.p animate={{
        scale: [1, 2]
      }} transition={{
        duration: 3,
        repeat: Infinity, 
        type: "spring",
        bounce:.8
        // stiffness: 10,
      }}
      >Loading.....</motion.p></div>)} */}
    </>
  );
}

export default App;
