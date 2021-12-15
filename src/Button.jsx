import classNames from "classnames";
import React from "react";

function Button(props) {
    return (
        <button
            className={classNames('button', {
                'button--outline': props.outline
            })}>
        </button>
    )
}

export default Button;