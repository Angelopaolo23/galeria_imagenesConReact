import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const BCard = (props) =>  {
    const {title, description, url, linkAutor} = props;
    return (
        <Card style={{ width: '350px' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="outline-dark"><a className='text-muted text-reset text-decoration-none' href={linkAutor}>Más fotos del autor(a)</a></Button>
            </Card.Body>
        </Card>
    );
};

export default BCard;
