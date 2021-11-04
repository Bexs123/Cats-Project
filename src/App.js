import './App.css';
import { useState, useEffect } from 'react';
import faker from "faker"
import Header from './Components/Header'
import styled from 'styled-components';
import { Modal } from './Components/Modal';

function App() {
  const [sibr, setSibr] = useState([])
  const [beng, setBeng] = useState([])
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    handleFetchSibr()
  }, [])

  useEffect(() => {
    handleFetchBeng()
  }, [])

  const handleFetchBeng = async () => {
    let newData = []

    let response = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=beng&limit=4");
    newData = await response.json();

    for (let i = 0; i < newData.length; i++) {
      const item = newData[i];
      item.price = parseInt(faker.commerce.price(), 10)
    }

    setBeng(newData)
  }

  const handleFetchSibr = async () => {
    let newData = []

    let response = await fetch("https://api.thecatapi.com/v1/images/search?breed_ids=sibe&limit=4");
    newData = await response.json();

    for (let i = 0; i < newData.length; i++) {
      const item = newData[i];
      item.price = parseInt(faker.commerce.price(), 10)
      console.log(typeof (item.price))
      console.log(item.price)
    }
    setSibr(newData)
  }

  const handleDelete = (item) => {

    let newBasket = [...basket];
    let productIndex = newBasket.indexOf(item)
    newBasket.splice(productIndex, 1);
    setBasket(newBasket);
    let itemPrice = item.price;
    setTotal(total - itemPrice)
  }

  const handleAdd = (item) => {
    setBasket([...basket, item])
    let itemPrice = item.price;
    setTotal(total + itemPrice)
  }

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <div className="App">
      {beng.length > 0 && sibr.length > 0 ?
        <>
          <Header handleToggle={openModal} basket={basket} />
          <Modal showModal={showModal} setShowModal={setShowModal} basket={basket} handleDel={handleDelete} total={total} />
          <div className="pagewrapper">

            <div>
              <div className="wrapperBeng">
                <Catdesc data={sibr} />
                <CatInfo data={sibr} handleAdd={handleAdd} />
                <ButtonCat onClick={handleFetchSibr}>More Siberian</ButtonCat>
              </div>
              <div className="wrapperBeng">
                <Catdesc data={beng} />

                <CatInfo data={beng} handleAdd={handleAdd} />
                <ButtonCat onClick={handleFetchBeng}>More BengalCats</ButtonCat>
              </div>
            </div>
          </div>
        </>

        :
        <h3>Loading...</h3>
      }
    </div>
  );
}

const CatInfo = (props) => {
  return (
    <div className="wrapper">
      <CatImg data={props.data} handleAdd={props.handleAdd} />
    </div>
  )
}

const Catdesc = (props) => {
  console.log(props.data)
  return (
    <p>
      {props.data[0].breeds[0].description}
    </p>
  )
}

const CatImg = (props) => {
  return (
    props.data.map((item) => {
      return (
        <Detail
          imgSrc={item.url}
          key={item.id}
          breed={item.breeds[0].name}
          price={item.price}
          handleAdd={() => props.handleAdd(item)}
        />
      )
    })
  )
}

const Detail = (props) => {
  return (
    <>
      <div className="wrapperCat">
        <OneCat>
          <img src={props.imgSrc} alt="cant access image" />
          <h4>Price: £{props.price}</h4></OneCat>
        <Button onClick={props.handleAdd}>add to cart</Button>
      </div>
    </>
  )
}

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    color:palevioletred;
    border: 2px solid palevioletred;
    border-radius: 5px;`;

const ButtonCat = styled.button`
    min-width:100px;
    height:40px;
    color:white;
    border-radius:5px;
    margin-top:15px;
    background: #141414;`

const OneCat = styled.div`
     margin-left:10px;
     background:rgba(0,0,0,0.2);
     border-radius:5px;
     padding:10px;
     `

export default App;