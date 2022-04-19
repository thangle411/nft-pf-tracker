import { useGasPrice } from "store/network/hooks";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

function GasPrice() {

    const { gasPrice, isLoading, err } = useGasPrice();

    if(isLoading) {
        return(
            <>
            </>
        )
    }

    if(err) {
        return(
            <>
                <span>Error!</span>
            </>
        )
    }

    return(
        <div className="d-flex align-items-center">
            <LocalGasStationIcon style={styles.gasIcon}></LocalGasStationIcon>
            <a style={styles.gasText} href="https://etherscan.io/gastracker" target="_blank">
                {gasPrice}
            </a>
        </div>
    )
}

const styles = {
    gasText: {
        color: 'green',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '20px',
        marginLeft: '6px'
    },
    gasIcon: {
        color: 'white'
    }
}

export default GasPrice;