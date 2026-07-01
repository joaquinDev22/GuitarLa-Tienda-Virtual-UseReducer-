import type { CartActions } from '../reducers/cart-reducer'
import type { Guitar } from '../types'

type GuitarProps = {
    guitar: Guitar, 
    dispatch: React.Dispatch<CartActions>
}

export default function Guitar({ guitar, dispatch }: GuitarProps) {

    const { name, image, description, price } = guitar

    return (
        <div className="grid grid-cols-3 gap-4 items-center shadow-md bg-white/70 p-3 rounded-xl shadow-amber-200  ">
            <div className="col-span-1">
                <img 
                    className="w-full rounded-xl" 
                    src={`/img/${image}.jpg`} 
                    alt={`imagen guitarra ${name}`} 
                />
            </div>
            <div className="col-span-2">
                <h3 className="text-black font-bold uppercase text-xl mb-2">
                    {name}
                </h3>
                
                <p className="text-black text-sm mb-3">
                    {description}
                </p>
                
                <p className="font-black p-2 bg-slate-100 w-fit rounded-full shadow-[inset_0_4px_12px_rgba(0,0,0,0.2)] text-amber-500 text-3xl mb-4">
                    ${price}
                </p>
                
                <button 
                    type="button"
                    className="bg-black text-white w-full uppercase font-bold text-sm py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    onClick={() => dispatch({type: 'add-to-cart', payload:{item: guitar}})}
                >
                    Agregar al Carrito
                </button>
            </div>
        </div>
    )
}

