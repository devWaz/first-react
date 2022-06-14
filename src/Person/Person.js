const person = (props) => {
    return(
           <div>
            <h2>My name is {props.name} and i am {props.age} years old</h2>
            <input type="text" onChange={props.changed}/>
           </div>
    )
}


export default person;