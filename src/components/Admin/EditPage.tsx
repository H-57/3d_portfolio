"use client"
import { useNavContext } from '@/context/sidebar/SidebarContext'
import React from 'react'
import ExperiencePage from './ExperiencePage'
import ProjectPage from './ProjectPage'

function EditPage({id}:{id:string}) {
    const {nav}:any=useNavContext()
    
  return <>

  
  {(nav=="Experience")?<ExperiencePage id={id}/>:(nav=="Projects")?<ProjectPage id={id}/>:"no component"}
  </>
  
}

export default EditPage


