import React, { Component } from 'react'
import { CardGroup, CardImg, Table, Col, Card, CardBody, CardTitle, CardText, Button} from 'reactstrap';

export default class Users extends Component {
  render() {
    const {users} = this.props;
    return (
        
        <>
        <h2>{this.props.currentCategory}</h2>
        <CardGroup>
            {users.map((user)=>(
                <Col xs="3">
                    <Card key={user.id}>
                        <CardImg
                        src={user.image}
                        alt={user.userName}
                        
                        />
                        <CardBody>
                            <CardTitle>{user.userName}</CardTitle>
                            <CardText>{user.desc}</CardText>
                            <Button>Detail</Button>
                        </CardBody>
                    </Card>
                </Col>
            ))}
        </CardGroup>
        
        </>
    )
  }
}
