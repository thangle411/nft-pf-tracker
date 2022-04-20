function TransactionData(props: any) {

    return(
        <>
            <div style={{color: 'white'}}>Tx: {props.hash}</div>

            <div style={{color: 'white'}}>Token IDs</div>
            {props.data.map((x: any) => {
                return(
                    <div style={{color: 'white'}}>{x.tokenID}</div>
                )
            })}
        </>
    )
}

export default TransactionData;