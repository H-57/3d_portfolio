import React from 'react'
import Tabel from './Tabel'

function Email() {
  return (
   <Tabel head={["Name","Email","Message","Delete"]} fields={["name","email","message"]} fetchData="email"/>
  )
}

export default Email