import React from 'react'
import styled from 'styled-components'
import Cart from './Cart'
import BasketTotal from './BasketTotal'

const BasketWindow = styled.div`
        width:80vw;
        height:80vh;
        position:fixed;
        top:10%;
        left:10%;
        color:white;
        z-index:10;
        background:rgba(0,0,0,0.8);
        display:flex;
        justify-content:center;
        align-item:center;
        border-radius:10px;
        flex-direction:column;`

    const InsideBasket = styled.div`
        
    `
    
    export const Modal = ({showModal,setShowModal,basket,handleDel,total}) => {
    return (
        <>
            {showModal ?    
            ( <BasketWindow> 
                <InsideBasket>
                <Cart basket={basket} handleDel={handleDel}/>
                <BasketTotal total={total}/>
                </InsideBasket>
               </BasketWindow>)
           :null}
        </>
    )
}