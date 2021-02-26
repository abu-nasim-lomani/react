import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const product = [
    { name: 'Adobe PhotoShop CC', price: '129.00' },
    { name: 'Adobe Premium Pro', price: '89.00' },
    { name: 'Camtasia 9', price: '1239.00' },
    { name: 'Autacity 1.0', price: '39.00' },
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Api></Api>
        {product.map(pd => <Product product={pd}></Product>)}
      </header>
    </div>
  );
}


function Api() {
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  });
  return (
    <div>
      <h1>hi:{users.length}</h1>
      <ul>
        {
          users.map(user=><li>{user.email}</li>)
         
        }
        {
           users.map(user=><li>{user.phone}</li>)
        }
      </ul>
    </div>
  )
}

// function Api() {
//   const [users,setUsers]=useState([]);
//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res=>res.json())
//     .then(data=>setUsers(data))
//   })
//   return (
//     <div>
//       <h1>Total User:{users.length}</h1>
//       <ul>
//         {
//           users.map(user=><li>{user.name}</li>)
//         }
//       </ul>
//     </div>
//   )
// }

function Product(props) {
  const productStyle = {
    width: '400px',
    height: '300px',
    border: '2px solid gold'
  }
  var { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>Name:{name}</h3>
      <h3>Price: ${price}</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit !</p>
      <button type="submit">Buy now</button>
    </div>
  )
}


export default App;
