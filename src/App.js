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
      showPerson : false
    }

    switchNameHandler = (newName) =>{
      this.setState({
        persons: [
        {name:newName, age:7},
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
  
    showPersonHandler = () =>{
      const doesShow = this.state.showPerson
      this.setState({
        showPerson : !doesShow
      })
    }

    deletePersonHandler = (personindex) =>{
        const Del = this.state.persons;
        

    }

  render(){

    let people = null;
    if(this.state.showPerson){
       people = ( 
      <div>
       {this.state.persons.map((pesin , index) =>{
          return <Person
            name = {pesin.name}
            age = {pesin.age}
            clicked = {() => this.deletePersonHandler(index)}
            changed = {this.nameChangedHandler}
          />
        })
       }
      </div> 
    )
       }

  return (
    <div className="App">
        <h1>Hello, World! I'm devWaz</h1>
        <button onClick={this.showPersonHandler}> Switch </button>
        {people}
    </div>
  );
}

}

export default App;
