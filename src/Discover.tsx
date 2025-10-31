import avatar2 from "./Assets/avatar-2.jpg"
import avatar9 from "./Assets/avatar-9.jpg"
import avatar10 from "./Assets/avatar-10.jpg"
import img0 from "./Assets/img-00.gif"
import img3 from "./Assets/img-03.jpg"
import img7 from "./Assets/img-7.jpg"

type ImageProp = React.ImgHTMLAttributes<HTMLImageElement>

type DiscoverProp= {
    avatar: ImageProp
    image: ImageProp
    name: string
    price: number
    likes:number
    item: string
    person:string 
    className: string
    fill: string 
}

type IdProp = {
  id: string
}

export function Items ({avatar, image, person, price, name, likes, item, className, fill}: DiscoverProp){
   return(
    <div className="bg-neutral-900 border-1 border-neutral-700 px-5 py-5 rounded-md">
         <div className="flex gap-3 place-items-center">
            <img className="w-10 h-10 rounded-full" {...avatar}/>
            <div className="grow-1">
                <h3 className="text-lg text-start font-semibold text-neutral-200">{name}</h3>
                <p className="text-sm text-start text-neutral-600">{person}</p>
            </div>
            <div className="bg-neutral-800 py-3 px-3 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={fill} className="bi bi-heart-fill" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg>
            </div>
         </div>
         <div className="mt-5">
            <img className={className} {...image}/>
         </div>
         <div className="flex place-items-center mt-5">
            <div className="flex place-items-center gap-2 grow-1 font-semibold text-xl text-emerald-400"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2"/>
            </svg> <span>{price} ETH</span></div>
            <div className="flex place-items-center gap-1 text-md text-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg> <span>{likes}k</span></div>
         </div>
         <div className="mt-2">
            <p className="text-lg text-start font-semibold text-neutral-200">{item}</p>
         </div>
    </div>
   )
}

export default function Discover({id}: IdProp){
    return(
        <div id={id} className="bg-neutral-800 px-5 sm:px-15 py-20">
            <div className="flex gap-4 place-items-center">
                <h2 className="text-3xl text-start grow-1 font-bold text-neutral-200">Discover Items</h2>
                <button className="flex place-items-center text-md rounded-md bg-gray-600 text-neutral-200 py-2 px-3">View All <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#e5e5e5" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                </svg></button>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-15">
                <Items avatar={{src: avatar2}} image={{src: img7}} fill="red" className="rounded-sm" name="Nancy Martino" price={97.8} person="Owners" likes={ 19.29} item="Patterns arts & culture"/>
                <Items avatar={{src: avatar9}} image={{src: img3}} fill="#e5e5e5" className="rounded-sm" name="Henry Baird" price={475.23} person="Creators" likes={ 31.64} item="Evolved Reality"/>
                <Items avatar={{src: avatar10}} image={{src: img0}} fill="red" className="rounded-sm h-83" name="Diana Kohler" price={701.38} person="Owners" likes={8.34} item="Long-tailed macaque"/>
            </div>
        </div>
    )
}