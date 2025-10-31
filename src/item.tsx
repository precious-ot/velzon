import React from "react";

type ImageProp = React.ImgHTMLAttributes<HTMLImageElement>

type ProductProp = {
    title: string,
    image: ImageProp,
    likes: number,
    highest: number,
    genres: string,
    price: number
}

export default function Item ({title, image, likes, highest, genres, price}: ProductProp){
    return(
        <div className="border-1 border-neutral-700 opacity-70 rounded-lg">
            <img className="w-full h-80 rounded-t-lg" {...image}/>
            <div className="border-b-1 border-neutral-500 px-5 py-5">
            <div className="flex gap-3 mt-5">
                <h6 className="grow-1 text-xl text-start font-bold text-neutral-100">{title}</h6>
                <p className="flex place-items-center gap-1 text-xl font-bold text-neutral-100"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                 <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                </svg> <span>{likes}K</span></p>
            </div>
              <p className="text-start mt-3 text-neutral-500">{genres}</p>
            </div>
            <div className="flex px-5 py-5">
                <p className="grow-1 text-start text-neutral-100">Highest: {highest}ETH</p>
                <span className="text-blue-500">{price} ETH</span>
            </div>
        </div>
    )
}
