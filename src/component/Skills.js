import React from "react";
import { motion } from "framer-motion"

const SKills = function (props) {
    const listSkill = props.data.map(list =>
        <motion.li
            initial={{
                scale: 0,
            }}
            whileInView={{
                scale: 1,
            }}
            transition={{
                duration: .5
            }}
            viewport={{ once: true }} key={list.category} style={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.2rem",

                flexDirection: "column",
                margin: "2vh 3vh",
                padding: "1vw",
                border: "2px solid black",
                height: "220px",
                width: "200px",
                textAlign: "center",
                backdropFilter: "blur(10px)",
                boxShadow: " 2px 2px 10px 2px black,1px 1px 0 .1px white inset",
                borderRadius: "10px",
                background: "linear-gradient(30deg,#D71313,#0D1282)"
            }}>
            <strong>{list.category}</strong>
            <ul style={{
                listStyle: "none",
                marginBottom: "10px",
                display: "flex",
                flexWrap: "wrap",
                fontSize: "1rem",
                padding: 0,
                alignItems: "center",
                justifyContent: "center",
                marginTop: "3vh"
            }}>
                {list.value.map(element =>
                    <li key={element} style={{
                        border: "2px solid black",
                        margin: "10px",
                        padding: "4px",
                        borderRadius: "10px",
                        color: "white",
                        boxShadow: "2px 2px 10px 2px black,1px 1px 0 .1px white inset"
                    }}>{element}</li>
                )}
            </ul>
        </motion.li>
    );
    return (
        <>
            <div className="outerContainer" style={{
                height: "85vh",
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
                    }}
                >Skills</motion.h1>
                <ul className="innerContainer" style={{
                    height: "70vh",
                    listStyle: "none",
                    padding: "0",
                    alignItems: "center"
                }}>{listSkill}</ul>
            </div>
        </>
    )
}

export default SKills