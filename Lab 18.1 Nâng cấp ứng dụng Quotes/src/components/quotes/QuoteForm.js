import { useRef } from "react";

import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    //lay gia tri input
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    //xac nhan thong tin
    if (enteredAuthor === "" || enteredText === "") {
      alert("xin vui long nhap day du thong tin");
    } else {
      // truyen du lieu
      props.onAddQuote({ author: enteredAuthor, text: enteredText });
      //reset lai form
      authorInputRef.current.value = "";
      textInputRef.current.value = "";
    }
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
