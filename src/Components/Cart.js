import ShopListItem from './ShopListItem'

const Cart = (props) => {

  return (
    <>
      {props.basket.length > 0 ?
        props.basket.map((item) => {
          return (
            <ShopListItem
              key={item.id}
              imgsrc={item.url}
              price={item.price}
              handleDelete={() => props.handleDel(item)} />
          )
        })
        :
        <p>Basket is empty</p>}
    </>
  )
}

export default Cart;