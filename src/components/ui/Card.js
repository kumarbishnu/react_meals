const Card = props => {

    return <div className={`card p-4 rounded-3 shadow ${props.className}`}>
        {props.children}
    </div>

}

export default Card;
