import { type CartActions } from "../reducers/cart-reducer"
import type { CartItem } from "../types"
import Cart from "./Cart"

type HeaderProps = {
    cart: CartItem[]
    dispatch: React.Dispatch<CartActions>
}

export default function Header({
        cart, 
        dispatch
    } : HeaderProps ) {
    
    const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0)

    return (
        <header className="py-10 bg-[url('/img/header.jpg')] bg-cover bg-center bg-no-repeat items-center shadow-md shadow-amber-300">
            <div className="mx-auto w-full px-4">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

                    <div className="w-2/3 md:w-1/4 ml-15">
                        <a href="index.html">
                            <img className="max-w-full h-auto" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>

                    <nav className="flex items-start justify-end mt-5 md:mt-0 mr-15">
                        <div className="relative group">
                            
                            <img className="w-15 cursor-pointer" src="/img/carrito.png" alt="imagen carrito" />

                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full pointer-events-none">
                                    {cartTotalItems}
                                </span>
                            )}

                            <div id="carrito" className="bg-white p-5 absolute right-0 top-full w-100 shadow-xl rounded-lg hidden group-hover:block z-50">
                                <Cart
                                    cart={cart}
                                    dispatch={dispatch}
                                />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
