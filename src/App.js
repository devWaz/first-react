import { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {

  state = {
      persons:[
        {name:'Fawaz', age:17},
        {name:'Anu', age:29},
        {name:'Deeman', age:15}
      ],
      otherState: 'something'
    }

    switchNameHandler = (newName) =>{
      this.setState({
        persons: [
        {name:'Waz', age:7},
        {name:'Anuoluwa', age:19},
        {name: newName, age:35}
          ]
        })
    };

    nameChangedHandler = (event) =>{
      this.setState({
        persons: [
        {name: event.target.value, age:7},
        {name: 'Adun', age:19},
        {name: 'Deeman', age:35}
          ]
        })
    };
  

  render(){
  return (
    <div className="App">
        <h1>Hello, World! I'm devWaz</h1>
        <h4>This is my first React App!</h4>
        <button onClick={this.switchNameHandler.bind(this , 'Wizkid')}> Click Here </button>
        
        <Person 
        changed ={this.nameChangedHandler}
        name= {this.state.persons[0].name}
        age= {this.state.persons[0].age}/>
        <Person
        name= {this.state.persons[1].name}
        age= {this.state.persons[1].age}/>
        <Person
        name= {this.state.persons[2].name}
        age= {this.state.persons[2].age}/>
    </div>
  );
}

}

export default App;
