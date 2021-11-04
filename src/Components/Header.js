import React from "react";
import styled from 'styled-components';
import { Modal } from "./Modal";

const Container = styled.div`
        display: flex;
        justify-content:center;
        `;

const Heading = styled.h1`
        flex:1`;

const Button = styled.button`
        min-width:100px;
        height:50px;
        color:white;
        border-radius:5px;
        margin-top:15px;
        background: #141414;`

const H3 = styled.h3`
     color:red;
     min-width:50px;
     margin-top:15px;
     background:rgba(0,0,0,0.8);
     border-radius:5px;
     padding-top:10px;5px;`

export default function Header(props) {
        return <div>
                <Container>
                        <Heading>Welcome to Cat Pet Shop</Heading>
                        <H3>{props.basket.length}</H3>
                        <Button onClick={props.handleToggle}>basket</Button>
                </Container>
        </div>
}