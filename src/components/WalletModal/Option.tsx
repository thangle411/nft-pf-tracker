import React from "react";
import iWalletInfo from 'interfaces/iWalletInfo';

function Option(props: {option: iWalletInfo}) {

    const icon = require(`../../${props.option.iconURL}`);

    return(
        <div style={styles.container}>
            <span>{props.option.name}</span>
            <img style={styles.img} src={icon} alt="Icon" />
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    img: {
        height: '30px'
    }
}

export default Option;