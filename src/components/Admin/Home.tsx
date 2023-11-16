import React from 'react'
import Tabel from './Tabel'

function Home() {
  return (
   <Tabel head={["Name","Email","Message","Delete"]} fields={["name","email","message"]} fetchData="email"/>
  )
}

export default Home