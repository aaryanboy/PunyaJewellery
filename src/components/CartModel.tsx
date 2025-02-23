"use client"
import Image from "next/image";

const CartModel = () => {


    const cartItems= true
    return (
        <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems?(<div>cart is empty</div>
            ):(<div>
                <Image src="https://images.pexels.com/photos/30465648/pexels-photo-30465648/free-photo-of-breathtaking-black-and-white-urban-window-cleaning.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96 } className="object-cover rounded-md"/>
            </div>)}
        </div>
    )
}

export default CartModel;