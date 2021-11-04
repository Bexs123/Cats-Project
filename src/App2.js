import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [data, setData]= useState([])
  useEffect(()=>{handleFetch()
  },[])

  const handleFetch =async()=>{
    let newdata=[]
    let response =  await fetch("https://api.thecatapi.com/v1/breeds?limit=5"
    ); 

    newdata = await response.json();
    setData(newdata)
  }

  return (
    <div className="App">
      <h1>Pet Shop</h1>
      <Cat data={data}/>
      <button onClick={handleFetch}>handleFetch</button>
    </div>
  )
  }

  const Cat=(props)=>{
    return(
        props.data.map((item,index)=>{
          return (
            <Detail 
              imgSrc={item.image.url}
              key = {index}
              breed= {item.name}
              id={item.id}
              temp={item.temperament}
              desc={item.description}
              />
          )
        })
      )
  }

  const Detail =(props)=>{
    return(
      <>
      <div className="wrapperCat">
        <img src={props.imgSrc} alt="cant access image"/>
        <h4>{props.breed}</h4>
        <div>{props.temp}</div>
        <p>{props.desc}</p>
      </div>
      </>
    )
    }

    export default App;