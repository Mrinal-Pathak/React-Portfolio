import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from 'framer-motion'
import importAllImages from '../utils/importAllImages';

const images = importAllImages(require.context('../images', false, /\.(png|jpe?g|svg)$/));





let projectData = [
    {
        title: "React Portfolio",
        description: "I have created a responsive and animated React portfolio site. The site showcases my work and projects through a clean, modern design. It features smooth animations to enhance user experience and is fully responsive, ensuring optimal viewing across all devices. Additionally, the portfolio includes a functional contact form, allowing visitors to easily get in touch with me.",
        image: "portfolio.png",
        gitUrl: "https://github.com/Mrinal-Pathak",
        url: "https://github.com/Mrinal-Pathak"
    },
    {
        title: "O-X-game(tic-tac-teo)",
        description: "I developed a mini-project, a Tic-Tac-Toe game, featuring an unbeatable computer mode. This implementation uses advanced algorithms to ensure that the computer never loses, providing a challenging and engaging experience for players. The game is designed with a simple yet intuitive interface, making it easy and fun to play for users of all ages.",
        image: "o-x-game.png",
        gitUrl: "https://github.com/Mrinal-Pathak/o-x-game",
        url: " https://mrinal-pathak.github.io/o-x-game/"
    },
    {
        title: " Retro Style Bouncy Ball Game",
        description: "I created a mini-project, a retro-style bouncy ball game, that combines nostalgic visuals with engaging gameplay. The game tracks and remembers your high score, providing a sense of achievement and progression. As your score increases, the ball's speed accelerates, adding an extra layer of challenge and excitement. The simple yet addictive mechanics make it a fun experience for players of all ages.",
        image: "bouncyBall.jpg",
        gitUrl: "https://github.com/Mrinal-Pathak/bouncy-ball",
        url: " https://mrinal-pathak.github.io/bouncy-ball/"
    },
    {
        title: "Matrix Calaulator",
        description: "I developed a mini-project, a Matrix Calculator using HTML, CSS, and JavaScript. This versatile tool enables users to perform a wide range of matrix operations including addition, subtraction, multiplication, adjoint, inverse, determinant, and transpose. The clean and intuitive interface ensures ease of use, making complex matrix computations straightforward and accessible for students, educators, and professionals alike.",
        image: "matrixCalculator.png",
        gitUrl: "https://github.com/Mrinal-Pathak/matrix-calculator",
        url: " https://mrinal-pathak.github.io/matrix-calculator/"
    },
    {
        title: "Simple Piano",
        description: "I created a mini-project, a simple online piano, using HTML, CSS, and JavaScript. This responsive piano features one octave and allows users to play music directly in their web browser. The intuitive design ensures that it works seamlessly across various devices, providing a fun and interactive musical experience for users of all ages.",
        image: "piano.png",
        gitUrl: "https://github.com/Mrinal-Pathak/piano",
        url: " https://mrinal-pathak.github.io/piano/"
    },
    {
        title: "Some C-programs",
        description: "I developed several mini-projects in C to demonstrate my programming skills, focusing on file handling for data storage. These projects showcase my ability to implement CRUD (Create, Read, Update, Delete) operations efficiently, highlighting my proficiency in managing data and working with files in C. Each project emphasizes robust and optimized code, reflecting my capability to handle complex tasks in systems programming.",
        image: "C-Programming.png",
        gitUrl: "https://github.com/Mrinal-Pathak/c_programs",
        url: ""
    },
]


const Project = function () {
    const projectCardList = projectData.map((data, index) =>
        <ProjectCard key={index} data={{ ...data, image: images[data.image] }} />
    )
    return (
        <>

            <div id="project" style={{
                height: "100vh",
                paddingTop: ".1vw"
            }}>
                <div className="outerContainer" style={{
                    height: "83vh",
                }}>
                    <motion.h1 style={{
                        margin: "1vw",
                        fontSize: "3rem"
                    }}
                        initial={{
                            x: -100,

                        }}
                        whileInView={{
                            x: 0
                        }}>Projects</motion.h1>
                    <div className="innerContainer" style={{
                        height: "68vh",
                    }}>
                        {projectCardList}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project