import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { validateEmail } from "../utils/validateEmail";
import { serverURl } from "../utils/constants";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const toastOptions: ToastOptions = {
    position: "bottom-right",
    autoClose: 2000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };
  const submitValues = async () => {
    if (!name) {
      return toast.error("Name is Required", toastOptions);
    }
    if (!email) {
      return toast.error("Email is Required", toastOptions);
    }
    if (!validateEmail(email)) {
      return toast.error("Email should be in correct format.", toastOptions);
    }
    try {
      const data = await fetch(serverURl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });
      const computed = await data.json();
      if (computed.status) {
        return toast.success(computed.msg, toastOptions);
      }
    } catch (err) {
      return toast.error("Server Unavailable", toastOptions);
    }
  };
  return (
    <form className="form">
      <Input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        setValue={setName}
      />
      <Input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        setValue={setEmail}
      />
      <Button text="Submit" onClick={submitValues} isFormButton />
      <ToastContainer />
    </form>
  );
}
