import React, { Component } from 'react'
import { Badge, Col, Container, Row, CardGroup, CardImg, Card, CardBody, CardTitle, CardText, Button} from 'reactstrap'

export default class About extends Component {



  render() {
    return (
      <>
      <Container>
        <Row>
            {this.props.roles.map((role)=>(
                <Col>
                <Badge onClick={()=>this.props.changeRoles(role)}><h2>{role.roleName}</h2></Badge>
                </Col>
            ))}
        </Row>
      </Container>
      <Container>
        <Row>
        <>
            <h2>{this.props.currentRole}</h2>
            <CardGroup>
                {this.props.users.map((user)=>(
                    <Col xs="3">
                        <Card key={user.id}>
                            <CardImg
                            src={user.image}
                            alt={user.userName}
                            
                            />
                            <CardBody>
                                <CardTitle>{user.userName}</CardTitle>
                                <CardText>{user.desc}</CardText>
                                <Button>Buy</Button>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </CardGroup>
            
            </>
        </Row>
      </Container>
      </>
    )
  }
}
