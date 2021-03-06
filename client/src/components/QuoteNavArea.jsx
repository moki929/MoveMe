import React from "react";
import styled from "styled-components";
import RightArrowButton from "./RightArrowButton";
import LeftArrowButton from "./LeftArrowButton";

const QuoteNavWrapper = styled.div.attrs({
    className: "quoteNavArea d-flex flex-column align-item-center text-center",
})`
    width: 45%;
`;

const QuoteNavButtonWrapper = styled.div.attrs({
    className:
        "QuoteNavButtonWrapper d-flex justify-content-around align-items-center",
})``;

const QuoteNavArea = () => {
    return (
        <QuoteNavWrapper>
            <h2>Quote</h2>
            <QuoteNavButtonWrapper>
                <LeftArrowButton />
                <RightArrowButton />
            </QuoteNavButtonWrapper>
        </QuoteNavWrapper>
    );
};

export default QuoteNavArea;
