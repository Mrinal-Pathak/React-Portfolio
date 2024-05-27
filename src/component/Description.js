import React from "react";
import { motion } from "framer-motion"


const Description = function () {


    return (

        <div className="outerContainer" id="descriptionDiv" style={{
            display: "flex",
            flexDirection: "column",
            margin: "2vw",
        }}>
            <motion.h1 style={{
                margin: "1vw",
                padding: "2vw",
            }}
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    type: "spring",
                    duration: 1.4,
                    bounce: .8
                }}
            ><strong>Hi! <br />I am Mrinal Kumar Pathak</strong></motion.h1>
            <motion.p
                initial={{
                    opacity: 0,
                    y: 30
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: .8
                }}
                style={{
                    fontSize: "1.2rem",
                    padding: "20px 5vw",
                    margin: "1vw",
                    textAlign: "justify",
                }}>I am currently pursuing a Bachelor of Computer Applications (BCA) at Arcade Business College in Patna. With a strong foundation in various programming languages and web development technologies, I am passionate about creating innovative software solutions. My journey into the world of programming started in high school and has only grown stronger through my academic and personal projects.</motion.p>
        </div>

    )
}

export default Description