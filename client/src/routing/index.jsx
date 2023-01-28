import React from 'react'
import { Route, Routes } from 'react-router'
import Add from '../pages/add'
import Detail from '../pages/detail'
import Home from '../pages/home'
import Wishlist from '../pages/wishlist'


const Routing = () => {
  return (
    <div>    
    <Routes>
    <Route path={"/"} element={<Home/>}/>
    <Route path={"/add"} element={<Add/>}/>
    <Route path={"/wishlist"} element={<Wishlist/>}/>
    <Route path={"/detail/:_id"} element={<Detail/>}/>
</Routes>
</div>
  )
}

export default Routing