import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h1>External Users</h1>
      <h2>Total Users: {users.length}</h2>
      {
        users.map(user => <User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className='user'>
      <h3>Name: {props.name}</h3>
      <h4>Email: {props.email}</h4>
    </div>
  )
}


function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  // const increaseCount = () => {
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}

export default App;

/* const products = [
  { name: 'Laptop', price: 75000 },
  { name: 'Phone', price: 45000 },
  { name: 'Watch', price: 3500 },
  { name: 'Sunglass', price: 750 }
]; */

/* {
  products.map(product => <Product name={product.name} price={product.price}></Product>)
} */

/* function Product(props) {
  return (
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
} */