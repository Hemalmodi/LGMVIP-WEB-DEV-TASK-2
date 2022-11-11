import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'


const Card=(props)=><div className='card'>

  <p className='id'>{props.datum.id}</p>
  <img className='image' src={props.datum.avatar}></img>
  <p className='name'>{props.datum.first_name}&nbsp;{props.datum.last_name}</p>
  <p className='email'>{props.datum.email}</p>

</div>

function App() {
  const [data, setData]=useState()
  const [loading, setloading]=useState()  
  const handleClick=()=>{
    setloading(true)
    fetch('https://reqres.in/api/users?page=1').then(res=>res.json()).then(data=>{
      setData(data.data)
      setloading(false)
    })
  }
  console.log(data)
  return (
    <div className="App">
      <ul className="nav">
        <li><img className='logo' src="mainlogo.jpg"></img></li>
        <li><button type="button" onClick={handleClick}>Get Users</button></li>   
      </ul>
      {loading ?<div className='midloader'><div className="loader"></div></div>: null}
      <div style={{
        padding: '16px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '16px'
      }}
      >

      {data ? data.map(datum=><Card key={datum.id} datum={datum} />):null}
      </div>
    </div>
  );
}

export default App;
