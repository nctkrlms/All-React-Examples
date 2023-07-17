import React, { Component } from 'react'
import { ListGroup, ListGroupItem } from "reactstrap";

export default class Roles extends Component {
    state = {
        roles: [],
    };
    componentDidMount() {
        this.getRoles();
    }

    getRoles = () => {
        fetch("http://localhost:3000/userRole")
            .then((response) => response.json())
            .then((data) => this.setState({ roles: data }))
    };


    render() {
        return (
            <>
                <ListGroup>
                    {this.state.roles.map((role) => (
                        <ListGroupItem
                            onClick={() => this.props.changeRoles(role)}
                            key={role.id}
                        >
                            {role.roleName}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <h2>{this.props.currentRole}</h2>
            </>
        )
    };
}
