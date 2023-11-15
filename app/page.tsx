"use client";

import './global.css'
import Image from 'next/image'
import { useState } from "react";
import Card from './components/card'
import Main from './components/main'

const Home = () =>{
   
    return(
      <Main>
        <Card></Card>
      </Main>
    )
  }
  
export default Home