import React, { useState, useEffect } from "react";
import pic from '../images/profilePic.png'
import { motion } from "framer-motion"

const PhotoSelection = () => {
    const wavePaths = [
        "M0,112L24,121.3C48,131,96,149,144,140C192,131,240,93,288,88.7C336,84,384,112,432,102.7C480,93,528,47,576,42C624,37,672,75,720,84C768,93,816,75,864,93.3C912,112,960,168,1008,182C1056,196,1104,168,1152,140C1200,112,1248,84,1296,74.7C1344,65,1392,75,1440,65.3C1488,56,1536,28,1584,18.7C1632,9,1680,19,1728,23.3C1776,28,1824,28,1872,37.3C1920,47,1968,65,2016,74.7C2064,84,2112,84,2160,88.7C2208,93,2256,103,2304,116.7C2352,131,2400,149,2448,172.7C2496,196,2544,224,2592,200.7C2640,177,2688,103,2736,102.7C2784,103,2832,177,2880,191.3C2928,205,2976,159,3024,121.3C3072,84,3120,56,3168,60.7C3216,65,3264,103,3312,140C3360,177,3408,215,3432,233.3L3456,252L3456,280L3432,280C3408,280,3360,280,3312,280C3264,280,3216,280,3168,280C3120,280,3072,280,3024,280C2976,280,2928,280,2880,280C2832,280,2784,280,2736,280C2688,280,2640,280,2592,280C2544,280,2496,280,2448,280C2400,280,2352,280,2304,280C2256,280,2208,280,2160,280C2112,280,2064,280,2016,280C1968,280,1920,280,1872,280C1824,280,1776,280,1728,280C1680,280,1632,280,1584,280C1536,280,1488,280,1440,280C1392,280,1344,280,1296,280C1248,280,1200,280,1152,280C1104,280,1056,280,1008,280C960,280,912,280,864,280C816,280,768,280,720,280C672,280,624,280,576,280C528,280,480,280,432,280C384,280,336,280,288,280C240,280,192,280,144,280C96,280,48,280,24,280L0,280Z",
        "M0,168L24,140C48,112,96,56,144,42C192,28,240,56,288,65.3C336,75,384,65,432,88.7C480,112,528,168,576,196C624,224,672,224,720,219.3C768,215,816,205,864,210C912,215,960,233,1008,224C1056,215,1104,177,1152,144.7C1200,112,1248,84,1296,98C1344,112,1392,168,1440,191.3C1488,215,1536,205,1584,177.3C1632,149,1680,103,1728,98C1776,93,1824,131,1872,140C1920,149,1968,131,2016,130.7C2064,131,2112,149,2160,172.7C2208,196,2256,224,2304,238C2352,252,2400,252,2448,228.7C2496,205,2544,159,2592,140C2640,121,2688,131,2736,130.7C2784,131,2832,121,2880,140C2928,159,2976,205,3024,210C3072,215,3120,177,3168,168C3216,159,3264,177,3312,186.7C3360,196,3408,196,3432,196L3456,196L3456,280L3432,280C3408,280,3360,280,3312,280C3264,280,3216,280,3168,280C3120,280,3072,280,3024,280C2976,280,2928,280,2880,280C2832,280,2784,280,2736,280C2688,280,2640,280,2592,280C2544,280,2496,280,2448,280C2400,280,2352,280,2304,280C2256,280,2208,280,2160,280C2112,280,2064,280,2016,280C1968,280,1920,280,1872,280C1824,280,1776,280,1728,280C1680,280,1632,280,1584,280C1536,280,1488,280,1440,280C1392,280,1344,280,1296,280C1248,280,1200,280,1152,280C1104,280,1056,280,1008,280C960,280,912,280,864,280C816,280,768,280,720,280C672,280,624,280,576,280C528,280,480,280,432,280C384,280,336,280,288,280C240,280,192,280,144,280C96,280,48,280,24,280L0,280Z",
        "M0,224L24,214.7C48,205,96,187,144,186.7C192,187,240,205,288,196C336,187,384,149,432,140C480,131,528,149,576,140C624,131,672,93,720,88.7C768,84,816,112,864,116.7C912,121,960,103,1008,107.3C1056,112,1104,140,1152,158.7C1200,177,1248,187,1296,182C1344,177,1392,159,1440,163.3C1488,168,1536,196,1584,196C1632,196,1680,168,1728,154C1776,140,1824,140,1872,130.7C1920,121,1968,103,2016,116.7C2064,131,2112,177,2160,182C2208,187,2256,149,2304,135.3C2352,121,2400,131,2448,126C2496,121,2544,103,2592,102.7C2640,103,2688,121,2736,130.7C2784,140,2832,140,2880,126C2928,112,2976,84,3024,93.3C3072,103,3120,149,3168,149.3C3216,149,3264,103,3312,74.7C3360,47,3408,37,3432,32.7L3456,28L3456,280L3432,280C3408,280,3360,280,3312,280C3264,280,3216,280,3168,280C3120,280,3072,280,3024,280C2976,280,2928,280,2880,280C2832,280,2784,280,2736,280C2688,280,2640,280,2592,280C2544,280,2496,280,2448,280C2400,280,2352,280,2304,280C2256,280,2208,280,2160,280C2112,280,2064,280,2016,280C1968,280,1920,280,1872,280C1824,280,1776,280,1728,280C1680,280,1632,280,1584,280C1536,280,1488,280,1440,280C1392,280,1344,280,1296,280C1248,280,1200,280,1152,280C1104,280,1056,280,1008,280C960,280,912,280,864,280C816,280,768,280,720,280C672,280,624,280,576,280C528,280,480,280,432,280C384,280,336,280,288,280C240,280,192,280,144,280C96,280,48,280,24,280L0,280Z",
        "M0,140L24,158.7C48,177,96,215,144,205.3C192,196,240,140,288,107.3C336,75,384,65,432,56C480,47,528,37,576,65.3C624,93,672,159,720,186.7C768,215,816,205,864,182C912,159,960,121,1008,107.3C1056,93,1104,103,1152,102.7C1200,103,1248,93,1296,93.3C1344,93,1392,103,1440,98C1488,93,1536,75,1584,98C1632,121,1680,187,1728,210C1776,233,1824,215,1872,200.7C1920,187,1968,177,2016,172.7C2064,168,2112,168,2160,172.7C2208,177,2256,187,2304,200.7C2352,215,2400,233,2448,238C2496,243,2544,233,2592,196C2640,159,2688,93,2736,65.3C2784,37,2832,47,2880,60.7C2928,75,2976,93,3024,84C3072,75,3120,37,3168,42C3216,47,3264,93,3312,116.7C3360,140,3408,140,3432,140L3456,140L3456,280L3432,280C3408,280,3360,280,3312,280C3264,280,3216,280,3168,280C3120,280,3072,280,3024,280C2976,280,2928,280,2880,280C2832,280,2784,280,2736,280C2688,280,2640,280,2592,280C2544,280,2496,280,2448,280C2400,280,2352,280,2304,280C2256,280,2208,280,2160,280C2112,280,2064,280,2016,280C1968,280,1920,280,1872,280C1824,280,1776,280,1728,280C1680,280,1632,280,1584,280C1536,280,1488,280,1440,280C1392,280,1344,280,1296,280C1248,280,1200,280,1152,280C1104,280,1056,280,1008,280C960,280,912,280,864,280C816,280,768,280,720,280C672,280,624,280,576,280C528,280,480,280,432,280C384,280,336,280,288,280C240,280,192,280,144,280C96,280,48,280,24,280L0,280Z"
    ];

    const [currentWave, setCurrentWave] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWave((prevWave) => (prevWave + 1) % wavePaths.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [wavePaths.length]);


    return (
        <div id="home" style={{
            display: "flex",

        }}>
            <svg id="wave" style={{
                transform: "rotate(0deg)",
                transition: "0.3s",
                width: "100vw",
                display: "block",
                zIndex: -2,
                filter: "drop-shadow(0 0 20px black)",
            }}
                viewBox="0 0 1440 230" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stopColor="#ff9800" offset="0%"></stop><stop stopColor="#f0f0f0" offset="100%"></stop></linearGradient></defs>
                <path style={{ transform: "translate(0, 0px)", opacity: "1", transition: "d 4s linear" }} fill="url(#sw-gradient-0)"
                    d={wavePaths[currentWave]}
                />
            </svg>

            <motion.img
                initial={{
                    y: 150,
                    scale: 0
                }}
                whileInView={{
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.7,
                }}
                viewport={{ once: true }}
                src={pic} style={{
                    height: "18vw",
                    width: "auto",
                    position: "absolute",
                    right: 0,
                    filter: "drop-shadow(0 0 20px black)",
                    zIndex: -1,

                }} alt="Profile Pic" />

        </div>
    );
};

export default PhotoSelection;