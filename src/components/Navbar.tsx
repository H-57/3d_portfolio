import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const links=[{name:"Home",url:"/"},
  {name:"Projects",url:"/projects"},
  {name:"About",url:"/about"},
  {name:"ContactUs",url:"/contact"},
  ]
    
  return (<>


   
    <nav className="fixed z-20 flex justify-between bg-transparent  text-white w-screen">
      <div className="px-5 xl:px-12 py-6  w-full block float-right ">
        <Link className="text-3xl font-bold font-heading" href="#">
          {/* <img class="h-9" src="logo.png" alt="logo"> */}
          Logo Here.
        </Link>
        {/* Nav Links */}
        <ul className="hidden float-right md:flex px-4 mx-auto font-semibold font-heading space-x-12">
          {
            links.map((link)=>
            <li key={link.name}><Link className="hover:text-gray-200" href={link.url}>{link.name}</Link></li>
            )
          }
          
          
        </ul>
        
     </div>
        
    
    </nav>





</>
  
)
}

export default Navbar