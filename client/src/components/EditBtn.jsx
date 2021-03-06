import React from "react";
import styled from "styled-components";
import FonteditPop from "./FontEditPop";

const Button = styled.button.attrs({
    type: "button",
    className: "btn yellow-background red-text d-lg-none",
    "data-toggle": "modal",
    "data-target": "#myModal",
})`
    position: fixed;
    top: 30%;
    right: -10px;
    border-radius: 10px;
    width: 50px;
    height: 100px;
`;

const Text = styled.div.attrs({
    className: "text-uppercase ",
})`
    transform: rotate(270deg) !important;
    transform-origin: left bottom 50%;
    letter-spacing: 3px;
`;

const Editbtn = () => {
    return (
        <div>
            <Button>
                {/* E<br />D<br />I<br />T */}
                <Text>EDIT</Text>
            </Button>
            <FonteditPop />
        </div>
    );
};

export default Editbtn;
