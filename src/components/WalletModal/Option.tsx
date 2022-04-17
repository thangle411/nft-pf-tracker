import React from "react";
import iWalletInfo from 'interfaces/iWalletInfo';

function Option(props: {option: iWalletInfo}) {
    return(
        <div style={styles.container}>
            <span>{props.option.name}</span>
            <img src={props.option.iconURL} alt="" />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}

export default Option;