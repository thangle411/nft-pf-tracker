import React from "react";
import iWalletInfo from 'interfaces/iWalletInfo';

interface walletOption {
    option: iWalletInfo,
    onClick: () => void
}

function Option(props: walletOption) {

    const icon = require(`../../${props.option.iconURL}`);

    return(
        <div style={styles.container} onClick={props.onClick}>
            <span style={styles.text}>{props.option.name}</span>
            <img style={styles.img} src={icon} alt="Icon" />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid black',
        borderRadius: '6px',
        padding: '10px 20px',
        cursor: 'pointer',
        // background: 'grey',
    },
    text: {
        fontSize: '20px',
        fontWeight: 'bold'
    },
    img: {
        height: '30px'
    }
}

export default Option;