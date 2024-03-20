import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'
import { HeaderComponent } from './components/header'

function App() {

  return (
    <div className="">
      <HeaderComponent/>
     <RevenueCard title={"Amount pending"} orderCount={"25"} amount={"92,312.20"}/>
    </div>
  )
}

export default App
