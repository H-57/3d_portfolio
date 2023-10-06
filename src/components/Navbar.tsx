"use client"
import Link from 'next/link'
import {useState} from 'react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
  const links=[{name:"Home",url:"/"},
  {name:"Projects",url:"/projects"},
  {name:"About",url:"#about"},
  {name:"ContactUs",url:"/contact"},
  ]
  const [toggel, setToggel] = useState<boolean>(false)
    
  return (<>


   
    <nav className="fixed z-20 flex justify-between bg-transparent  text-white w-screen">
      <div className="px-5 xl:px-12 py-6  w-full block float-right ">
        <Link className="text-3xl font-bold font-heading" href="#">
          {/* <img class="h-9" src="logo.png" alt="logo"> */}
          Logo Here.
        </Link>
        {/* Nav Links */}
        <ul className={`hidden float-right md:flex px-4 mx-auto font-semibold font-heading space-x-12 `}>
          {
            links.map((link)=>
            <li key={link.name}><Link className="hover:text-gray-200" href={link.url}>{link.name}</Link></li>
            )
          }
          
          
        </ul>
   <div className=' block  float-right md:hidden'>

<Bars3BottomLeftIcon onClick={()=>setToggel(!toggel)} className=  {`w-8 h-8 ${toggel?"hidden":"block"}`}   />
<XMarkIcon onClick={()=>setToggel(!toggel)} className=  {`w-8 h-8 ${!toggel?"hidden":"block"}`} />
   </div>
   <ul className={`absolute right-0 bg-gray-800 rounded-sm cursor-pointer ${toggel?"":'hidden'}`}>
   {
            links.map((link)=>
            <li onClick={()=>setToggel(!toggel)} key={link.name}><Link className="hover:text-gray-200 hover:bg-slate-600" href={link.url}>{link.name}</Link></li>
            )
          }
   </ul>
  
     </div>
        
    
    </nav>





</>
  
)
}

export default Navbar