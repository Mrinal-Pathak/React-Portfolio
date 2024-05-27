import React from "react";
import '../css/App.css'
import { motion } from "framer-motion";

const ProjectCard = function (props) {



    return (
        <>
            <motion.div id="projectCard"
                initial={{
                    x: 200
                }}
                whileInView={{
                    x: 0
                }}
                style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "10px",
                    backgroundImage: `url(${props.data.image})`,
                    backgroundSize: "100% 200px",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "2vw",
                    boxShadow: "2px 2px 20px 2px black,1px 1px 0 .1px white inset"
                }}>
                <div style={{
                    height: "110px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",

                }}>
                    {props.data.gitUrl !== "" && (<div className="linkBtn" onClick={() => window.open(props.data.gitUrl, "_blank")}>Source Code</div>)}
                    {props.data.url !== "" && (<div className="linkBtn" onClick={() => window.open(props.data.url, "_blank")}>link</div>)}
                </div>
                <div style={{
                    backgroundImage: "linear-gradient(60deg,#D71313,#0D1282)",
                    height: "80px",
                    width: "93%",
                    overflow: "scroll",
                    color: "white",
                    padding: "10px",
                    position: "relative",
                    top: "89px",
                    borderRadius: "0px 0px 10px 10px",
                    textAlign: "justify"

                }}>

                    <h3 style={{ margin: "0" }}><strong>{props.data.title}</strong></h3>
                    <p>{props.data.description}</p>
                </div>

            </motion.div>
        </>
    )
}

export default ProjectCard