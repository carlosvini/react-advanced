import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UserList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user) {
        return (
            <div className="car card-block" key={user.id}>
                <h4 className="car-title">{user.name}</h4>
                <p className="card-text">{user.company.name}</p>
                <a className="btn btn-primary" href={ 'mailto:'+user.email }>Email</a>
                <a className="btn btn-default" href={`http://${user.website}`}>Website</a>
            </div>
        )
    }

    render() {
        return (
            <div className="user-list">
                {this.props.users.map(this.renderUser)}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);