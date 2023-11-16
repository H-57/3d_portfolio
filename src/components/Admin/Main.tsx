"use client"


import React from 'react'
import ExperiencePage from './ExperiencePage'
import { useNavContext } from '@/context/sidebar/SidebarContext';
import ProjectPage from './ProjectPage';
import Home from './Home';



function Main() {
const{nav}:any=useNavContext();

  return (
    <div className='col-span-4 border'>
      {(nav=="Experience")?<ExperiencePage/>:(nav=="Projects")?<ProjectPage/>:<Home/>}
      


    </div>
  )
}

export default Main