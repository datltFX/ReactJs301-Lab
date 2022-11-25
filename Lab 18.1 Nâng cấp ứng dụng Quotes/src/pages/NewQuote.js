import QuoteForm from "../components/quotes/QuoteForm";
import postData from "../api/postData";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
  const history = useHistory();
  //day du lieu len firebase
  const addQuoteHandler = (quoteData) => {
    postData(
      "https://react-lab-af347-default-rtdb.firebaseio.com/data.json",
      quoteData
    );
    console.log(quoteData);
    history.push("/quotes");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
