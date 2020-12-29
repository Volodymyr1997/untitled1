import React, {Component} from 'react';
import Users from "./user/users";
class App extends Component {
    users = [
        {name:'Victor',age:24, car:'opel'},
        {name:'Volodymyr',age:30, car: 'Tesla'},
        {name:'Danyla', age: 35, car: 'Vaz'},
        {name: 'Karyna', age: 30, car: 'Mersedes'},
        {name: 'Dyma', age: 31, car: 'Shkoda'},
        {name: 'Rostyk', age: 28, car: 'Corvet'},
        {name: 'Dony', age: 47, car: 'Porshe'},
        {name:'koly', car: 'Ford',age: '40'},
    ];











    render() { let users = this.users
        return (
            <div>


                {
                    users.map((value) => {
                        return (<Users item = {value}/>)
                    })


                }


            </div>
        );
    }
}

export default App;