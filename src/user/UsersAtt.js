import React, {Component} from 'react';
import "./users.css"
class UsersAtt extends Component {

    render() {
        let {ite,selectUsers} = this.props
        return (
            <div>
                { ite.id}==={ite.name}
                <button onClick={() => selectUsers(ite.id)}> thus user </button>
            </div>
        );
    }
}

export default UsersAtt;