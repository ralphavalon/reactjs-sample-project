import React from 'react';
import http from '../../http';
import Users from './Users';
import './Users.css';

class UsersContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { users: [] };
    }

    componentDidMount() {
        http.loadUsers().then(response => {
            this.setState({ users: response.data });
        });
    }

    render() {
        return React.createElement(Users, {
            users: this.state.users,
            ...this.props
        });
    }
}

export default UsersContainer;
