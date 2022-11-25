//do
import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotesArr, condition) => {
  if (condition) {
    return quotesArr.sort();
  } else {
    return quotesArr.reverse();
  }
};

const QuoteList = ({ quotes }) => {
  // console.log(quotes);
  const history = useHistory();
  //lay thong tin url
  const location = useLocation();
  // console.log(location);
  const queryParams = new URLSearchParams(location.search);
  // console.log(queryParams);

  //sap xep gia tri trong mang
  const isSortingAscending = queryParams.get("sort") === "asc";
  const sortedQuotes = sortQuotes(quotes, isSortingAscending);
  // console.log(isSortingAscending);
  // console.log(sortedQuotes);

  //chuyen huong url asc-desc
  const changeSortHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortHandler}>
          Sort {isSortingAscending ? "Descending" : "Ascending"}
        </button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
