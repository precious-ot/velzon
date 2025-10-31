import img1 from "./Assets/img-01.jpg"
import img2 from "./Assets/img-02.jpg"
import img6 from "./Assets/img-06.jpg"
import img5 from "./Assets/img-5.gif"
import avatar5 from "./Assets/avatar-5.jpg"
import avatar8 from "./Assets/avatar-8.jpg"
import { useState } from "react"

type ImageProp = React.ImgHTMLAttributes<HTMLImageElement>

type CreatorProp = {
  image: ImageProp
  name: string
  price: number  
}

type IdProp = {
  id: string
}

export function Assets({image, name, price}: CreatorProp) {
  const [dropdown, setDropdown] = useState<boolean>(false);
  return(
    <div className="flex gap-2 bg-neutral-950 border-1 border-neutral-800 py-5 px-5 rounded-md">
      <div>
        <img className="w-12 h-12 rounded-sm" {...image}/>
      </div>
      <div className="grow-1">
        <h1 className="text-lg text-start font-semibold text-neutral-200">{name}</h1>
        <p className="text-blue-600 flex place-items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
            </svg><span className="text-neutral-600">{price} ETH</span></p>
      </div>
      <div className="relative overflow-visible">
        <button onClick={() => setDropdown(!dropdown)} className="hover:bg-sky-500/20 py-3 px-3 rounded-sm text-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
         <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
        </svg>
        </button>
        {dropdown &&
        <div className="absolute bg-neutral-800 w-40 rounded-md py-2 left-0 -ml-30 mt-2">
          <li className="list-none text-start text-neutral-500 ps-3 py-1 hover:bg-neutral-700">Share</li>
          <li className="list-none text-start text-neutral-500 ps-3 py-1 hover:bg-neutral-700">Report</li>
        </div>
        }
      </div>
    </div>
  )
}

export default function Creator({id}: IdProp) {
    return(
        <div id={id} className="bg-neutral-900 px-5 py-20 sm:px-15">
        <div className="grid place-items-center">
          <h1 className="text-3xl font-semibold text-neutral-200 max-w-2xl">Top Creator This Week</h1>
          <p className="text-neutral-500 mt-8 max-w-3xl">NFTs are valuable because they verify the authenticity of a non-fungible asset. This makes these assets unique and one of a kind.</p>
        </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center mt-15">
            <Assets image={{src: img1}} name="Timothy Smith" price={4_754}/>
            <Assets image={{src: avatar5}} name="Alexis Clarke" price={81_369}/>
            <Assets image={{src: img6}} name="Glen Matney" price={13_156}/>
            <Assets image={{src: img5}} name="Herbert Stokes" price={34_754}/>
            <Assets image={{src: avatar8}} name="Michael Morris" price={13_841}/>
            <Assets image={{src: img2}} name="James Morris" price={63_710}/>
        </div>
        </div>
    )
}

