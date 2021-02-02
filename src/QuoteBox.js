import React, { useState, useEffect } from "react";
import Quotes from "./Quotes";
import Button from "@material-ui/core/Button";
import axios from "axios";
const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const quoteButton = {
    display: "flex",
    justifyContent: "center",
    bottom: "-5em",
    position: "relative",
  };

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    axios
      .get("https://60194faefa0b1f0017accd87.mockapi.io/api/v1/quotes")
      .then((res) => {
        let data = res.data;
        let quoteNum = Math.floor(Math.random() * data.length);
        let randomQuote = data[quoteNum];
        setQuote(randomQuote["quote"]);
        setAuthor(randomQuote["author"]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <Quotes quote={quote} author={author} />
      <div style={quoteButton}>
        <Button variant="contained" onClick={getQuote}>
          New Quote
        </Button>
      </div>
    </>
  );
};

export default QuoteBox;
