//do
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
function AllQuotes({ quotes }) {
  // console.log(quotes);
  return quotes.length > 0 ? <QuoteList quotes={quotes} /> : <NoQuotesFound />;
}
export default AllQuotes;
