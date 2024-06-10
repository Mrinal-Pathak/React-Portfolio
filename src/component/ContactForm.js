import React, { useState } from "react";
import { motion } from "framer-motion";

import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';

const ContactForm = function (props) {

  const [successMsg, setSuccessMsg] = useState(false)


  const { register, handleSubmit, setValue } = useForm();

  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);


    formData.append("access_key", props.formKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      document.getElementById("contactForm").reset();
      setSuccessMsg(true)
      setTimeout(() => {
        setSuccessMsg(false)
      }, 5000);
      if (window.hcaptcha) {
        window.hcaptcha.reset();
      }
    }
  };







  return (
    <>
      <div id="contect" style={{

      }}>
        <div className="outerContainer" style={{

        }}>
          <motion.h2
            initial={{
              x: -100
            }}
            whileInView={{
              x: 0
            }}
            style={{
              margin: "1vw"
            }}>Write something for me!</motion.h2>
          <motion.p
            initial={{
              y: 20
            }}
            whileInView={{
              y: 0
            }}
            transition={{
              duration: 1,
              type: "spring",
              bounce: .8
            }}
            style={{
              margin: "2vw",
              textAlign: "justify",
              fontSize: "1.1rem"
            }}>Hi there! I'd love to hear from you. Whether you're interested in working together, have a question, want to chat, or send me feedback, drop me a message below. I'll get back to you as soon as possible. Let's make something great together!</motion.p>
          <div className="innerContainer" style={{
            flexDirection: "column",
            padding: "4vw",
            alignItems: "center",

          }}>
            <motion.form
              initial={{

              }}
              whileInView={{

              }}
              id="contactForm" onSubmit={onSubmit} style={{
                flexDirection: "column",
                display: "flex",
                padding: "2vw 5vw",
                alignItems: "center",
                border: "2px solid black",
                boxShadow: "2px 2px 10px 2px black,1px 1px 0 .1px white inset"
              }}> Name
              <input type="text" name="name" required />
              Email
              <input type="email" name="email" required />
              Contact Number (optional)
              <input type="tel" name="phoneNumber" />
              Message for me!
              <textarea style={{
                background: "none",
                width: "30vh",
                margin: "1vw",
                border: "2px solid white",
                color: "white",
              }} name="message" id="" rows="4" required></textarea>

              <HCaptcha
                sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                reCaptchaCompat={false}
                onVerify={onHCaptchaChange}
              />
              <input type="hidden" name="subject" value="some is submitted your Portfolio form" />
              <button type="submit">Submit</button>
            </motion.form>
          </div>
        </div>
        {successMsg && (<motion.div
          initial={{
            scale: 0
          }}
          whileInView={{
            scale: 1
          }}
          id="successMsg" style={{
            display: "block",
            position: "sticky",
            bottom: "85vh",
            background: "#bcf7c4",
            color: "green",
            borderRadius: "10px",
            boxShadow: "2px 2px 10px 2px black,1px 1px 0 .1px white inset",
            padding: "10px",
            width: "60vw",
            left: "20vw",
            textAlign: "center"

          }}>Your form is submitted successfully!</motion.div>)}
      </div>
    </>
  )
}

export default ContactForm