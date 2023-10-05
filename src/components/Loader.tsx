import { Html,useProgress } from "@react-three/drei"

const Loader = () => {
  const {progress}=useProgress()
  return (
    <Html>
<span className="relative">
  <p className="absolute top-10 text-3xl font-bold ">{progress.toFixed(2)}%</p>
</span>

    </Html>
  )
}

export default Loader