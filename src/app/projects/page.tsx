import Projects from '@/components/Projects'
import GamingRoomCanvas from '@/components/canvas/GamingRoom'
import { div } from 'three/examples/jsm/nodes/Nodes.js'


function page() {
  return (
    // <Projects />
    <div className='w-full h-[100vh] '>

      <GamingRoomCanvas  />
    </div>
  )
}

export default page