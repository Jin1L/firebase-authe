import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const signIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredencial) => {
        console.log(userCredencial);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={signIn}>
      <h3>Sign In: </h3>
      <div className="flex gap-3">
        <input
          className="border-2 border-black rounded-md"
          type="email"
          placeholder="Enter your email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          className="border-2 border-black rounded-md"
          type="password"
          placeholder="Enter your password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </div>
      <button className="mt-3 mb-2 border-2 border-black" type="submit">Submit</button>
    </form>
  );
};

export default SignIn;
