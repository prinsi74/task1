import React from 'react'
import SimpleCounter from '../src/Componets/SimpleCounter'
import ToggleVisiblity from '../src/Componets/ToggleVisiblity'
import FormInput from '../src/Componets/FormInput'
import LoginForm from '../src/Componets/LoginForm'
import Themes from '../src/Componets/Themes'
import { Route, Routes } from 'react-router-dom'
import Like from '../src/Componets/Like'
import TodoList from '../src/Componets/TodoList'
import CharList from '../src/Componets/CharList'
import Timer from '../src/Componets/Timer'
import ShoppingCart from '../src/Componets/ShopingCart'
import FetchData from '../src/Componets/FetchData'
import Window from '../src/Componets/Window'
import Timer2 from '../src/Componets/Timer2'
import LocalStorage from '../src/Componets/LocalStorage'
import SearchFilter from '../src/Componets/SerchFilter'
import PollingData from '../src/Componets/PollingData'
import CountDown from '../src/Componets/CountDown'
import Tracker from '../src/Componets/Tracker'
import LazyLoad from '../src/Componets/LazyLoad'
import Status from '../src/Componets/Status'

function App() {
  return (
    <div>
      {/* <SimpleCounter/>
      <ToggleVisiblity/>
      <FormInput/>
      <LoginForm/>
      <Themes/>

       */}
      <Routes>
          <Route path='/simplecounter' element={<SimpleCounter/>}/>
          <Route path='/toggle' element={<ToggleVisiblity/>}/>
          <Route path='/form' element={<FormInput/>}/>
          <Route path='/loginform' element={<LoginForm/>}/>
          <Route path='/theme' element={<Themes/>}/>
          <Route path='/like' element={<Like/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
          <Route path='/charlist' element={<CharList/>}/>
          <Route path='/timer' element={<Timer/>}/>
          <Route path='/shopingcart' element={< ShoppingCart/>}/>
          <Route path='/fetchdata' element={< FetchData/>}/>
          <Route path='/window' element={< Window/>}/>
          <Route path='/timer2' element={<Timer2 />}/>
          <Route path='/localstorage' element={<LocalStorage />}/>
          <Route path='/searchfilter' element={<SearchFilter/>}/>
          <Route path='/pollindata' element={<PollingData/>}/>
          <Route path='/countdown' element={<CountDown/>}/>
          <Route path='/tracker' element={<Tracker/>}/>
          <Route path='/lazyload' element={<LazyLoad/>}/>
          <Route path='/status' element={<Status/>}/>

      </Routes>


    </div>
  )
}

export default App
