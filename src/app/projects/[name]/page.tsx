import React from 'react'
interface props{
    params: { name: string } 
}

function page({params}:props) {
  return (
    <div>{params.name}</div>
  )
}

export default page