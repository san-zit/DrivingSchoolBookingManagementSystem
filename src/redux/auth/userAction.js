

import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../firebaseConfig/config.js";

export const login = (email, password) => async () => {
  try {
    console.log(email, password);
    const resPromise = signInWithEmailAndPassword(auth, email, password);
    toast.promise(resPromise, {
      pending: "In progress...",
    });
    await resPromise;
    toast.success("Login sucessfull");
    console.log("login sucessess");
    //navigate todo...
    // navigate("/user-profile-page");
  } catch (e) {
    console.log("login failed");
    toast.error(e.message + "Login Failed");
  }
};
