import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Koober', 'Bappi', 'Shuvo', 'Omar Sani'];
  const cinemas = [
    { nayok: 'Koober', nayika: 'kopila' },
    { nayok: 'Rubel', nayika: 'Moushumi' },
    { nayok: 'Razzak', nayika: 'Shabana' },
    { nayok: 'Jashim', nayika: 'Suchorita' },

  ]
  return (
    <div className="App">
      <ul>
        {nayoks.map(nayok => <li>{nayok}</li>)}

      </ul>
      {
        cinemas.map(cinema => <Cinema nayok={cinema.nayok} nayika={cinema.nayika}  ></Cinema>)
      }
    </div>
  );
}

function Person(props) {
  // console.log(props);
  const person = {
    backgroundColor: "skyblue",
    border: "3px solid lightsalmon",
    margin: "20px",
    borderRadius: "10px"
  }
  return (
    <div style={person}>
      <h1>Name: {props.name}</h1>
      <h3>Profession: {props.profession}</h3>
    </div>
  );
}
function Friend(props) {
  return (
    <div className='person'>
      <h3>Phone: {props.phone}</h3>
      <h5>Adress: {props.address} </h5>
    </div>
  );
}
function Cinema(props) {
  return (
    <div className="person">
      <h2>Nayok: {props.nayok}</h2>
      <h4>Nayika: {props.nayika}</h4>
    </div>
  );
}

{/* <p id="title">Title</p>
      <Friend phone="01700" address="Noakhali"></Friend>
      <Friend phone="01899" address="Rongpur"></Friend>
      <Friend phone="01655" address="Jessore"></Friend>
      <Friend phone="01900" address="Dhaka"></Friend> */}

{/* <Person name='Shipu' profession='Computer Engineer'></Person>
      <Person name='Kona' profession='Accountant Manager'></Person>
      <Person name='Jahnaker Mahbub' profession='Boss'></Person> */}

export default App;
