const Card = (props) => {
    const {name, description, url} = props;
    return (
        <div className="container w-25 border card">
            <img className="image mt-2" src={url}></img>
            <h2 className="text-center">{name}</h2>
            <p className="text-center">{description}</p>
        </div>
    )
};

export default Card;