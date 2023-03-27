import { TextField } from "@mui/material";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LanguageContext } from "../App";
import { useAuth } from "../hook/useAuth";

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {language} = useContext(LanguageContext)

  const {signin} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const user = form.username.value;

    signin(user, ()=> navigate(fromPage, {replace: true}))
  }

  return (
    <div>
      <h1>{language === 'ukr' ? 'Сторінка входу' : 'Login Page'}</h1>
      {/* <form onSubmit={handleSubmit}>
        <label>
          {language === 'ukr' ? 'Імʼя' : 'Name'}: <input name="username"/>
        </label>
        <button type="submit">Login</button>
      </form> */}
      <TextField id="outlined-basic" label={language === 'ukr' ? 'Імʼя' : 'Name'} name="username" variant="outlined" />
      <button type="submit">Login</button>
    </div>
  )
};

export default LoginPage;



