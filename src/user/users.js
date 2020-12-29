import React, {Component} from 'react';
import "./users.css";
import UsersAtt from "./UsersAtt";
class Users extends Component {
    state ={users: [] , classState: 'two' , thosenUser:null};

    flag = false;
    className = 'one'
    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(userApp => {
                this.setState({users:userApp});
            })
    }
    changeColor = () => {
        console.log('---')
        if (this.flag) {
            this.setState({classState: 'terget'});
        } else
        {
            this.setState({classState:'one'});
        }
        this.flag = !this.flag;
    };
    selectUsers = (id) => {
        let thosenUser = this.state.users.find(value => value.id === id);
        this.setState({thosenUser});
    };
    render() {

        let {users,classState,thosenUser} = this.state;

        let {item} = this.props;

        return (
            <div>
                <h1 onClick={this.changeColor} className={classState}>Helo</h1>

                {
                    users.map(value => (<UsersAtt
                        ite = {value}
                        key = {value.id}
                    selectUsers = {this.selectUsers}/>))
                }

                {
                    thosenUser && ( <UsersAtt ite={thosenUser}/> )
                }


            </div>
        );
    }
}

export default Users;