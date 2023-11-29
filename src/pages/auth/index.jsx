import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Auth = () => {
  const navigate = useNavigate();

  const singInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: result.user.uid,
      name: result.user.displayName,
      profilePhoto: result.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };
  return (
    <div className="login-page">
      <p>Sing In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={singInWithGoogle}>
        Sing In With Google
      </button>
    </div>
  );
};
