import styled from 'styled-components';

const Button = styled.button`
min-width:100px;
height:50px;
color:white;
border-radius:5px;
margin-top:15px;
background: #141414;`

const ShopListItem = (props) => {
  return (
    <ul>
      <li className="cart-item">
        <img className="basketImg" src={props.imgsrc} alt="cat" />
        <h4>  £{props.price}</h4>
        <Button onClick={props.handleDelete}>Del</Button>

      </li>
    </ul>)
}

export default ShopListItem;