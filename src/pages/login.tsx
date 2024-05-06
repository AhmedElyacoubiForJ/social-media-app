import { auth, googleProvider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result);
  };

  return (
    <div>
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Login;
