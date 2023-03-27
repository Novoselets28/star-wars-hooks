import { useContext } from "react";
import { useNavigate } from "react-router";
import { LanguageContext } from "../App";

const ErrorPage = () => {

  const {lanuage} = useContext(LanguageContext)

  const navigate = useNavigate()
  const goBack = () => navigate(-1)


  return (
    <div id="error-page">
      <h1>{lanuage === 'ukr' ? 'Дідько!' : 'Oops!'}</h1>
      <p>{lanuage === 'ukr' ? 'Вибачте, сталася неочікувана помилка.🫖' : 'Sorry, an unexpected error has occurred.🫖'}</p>
      <button onClick={goBack}>Go back</button>
    </div>
  );
}

export default ErrorPage;

