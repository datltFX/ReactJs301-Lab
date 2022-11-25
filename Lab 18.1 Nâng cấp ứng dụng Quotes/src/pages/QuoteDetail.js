//do
import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QuoteDetail = ({ quotes }) => {
  // console.log(quotes);
  const [quotesData, setQuotesData] = useState(quotes);
  useEffect(() => {
    setQuotesData(quotes);
  }, []);

  //lay id
  const params = useParams();
  const { quoteId } = params;
  // console.log(quoteId);
  const quoteFilterId = quotesData.filter((quote) => quote.id === quoteId);
  // console.log(quoteFilterId);

  return (
    <Fragment>
      <HighlightedQuote
        text={quoteFilterId[0].text}
        author={quoteFilterId[0].author}
      />
    </Fragment>
  );
};

export default QuoteDetail;
