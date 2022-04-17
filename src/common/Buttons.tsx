import React from "react";

interface iButton {
    text: string,
    style: any,
    onClick: () => void
}

function Button(props: iButton) {
    return(
        <>
            <button style={props.style} onClick={props.onClick}>
                {props.text}
            </button>
        </>
    );
}

export default Button;