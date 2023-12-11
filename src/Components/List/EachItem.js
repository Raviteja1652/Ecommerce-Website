import { Card, Col, Row } from "react-bootstrap";

const EachItem = (props) => {
    return(
        <Row xs={1} md={2} className="g-4">
            
            <Col>
                <Card>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Img src={props.image} />
                    <Card.Text>{`$${props.price}`}</Card.Text>
                </Card>
            </Col>
            
        </Row>

        // <div>
        //     <li>
        //         <h4>{props.title}</h4>
        //         <div>
        //             <img src={props.image} alt=''></img>
        //         </div>
        //         <div>
        //             <h3>{`$${props.price}`}</h3>
        //         </div>
                
        //     </li>
        // </div>
    );
};

export default EachItem;