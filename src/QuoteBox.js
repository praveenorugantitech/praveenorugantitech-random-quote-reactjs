import React, { useState, useEffect } from 'react';
import Quotes from './Quotes';
import Button from '@material-ui/core/Button';
import axios from 'axios';
const QuoteBox = () => {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const quoteButton = {
        display: "flex",
        justifyContent: "center",
        bottom: "-5em",
        position: "relative"
    }

    useEffect(() => {
        getQuote();
    }, [])

    const getQuote = () => {
        let url = 'https://raw.githubusercontent.com/praveenorugantitech/praveenorugantitech-test/master/QuotesData/quotes.json'
        axios.get(url)
            .then(res => {
                let data = res.data.quotes;
                let quoteNum = Math.floor(Math.random() * data.length);
                let randomQuote = data[quoteNum];
                setQuote(randomQuote['quote']);
                setAuthor(randomQuote['author']);

            })
            .catch(err => {
                console.log(err);
            });
    }
    return (

        <>
            <Quotes quote={quote} author={author} />
            <div style={quoteButton}>
                <Button variant="contained" onClick={getQuote}>
                    New Quote
            </Button>
            </div>
        </>


    )
}

export default QuoteBox;