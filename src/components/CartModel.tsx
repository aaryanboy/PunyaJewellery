"use client"
import Image from "next/image";

const CartModel = () => {


    const cartItems= true
    return (
        <div className=" w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {!cartItems?(<div>cart is empty</div>

            ):(

                <>

                <h2 className="text-xl">Shopping cart/fav</h2>
            <div className="flex flex-col gap-8">
                {/* items    */}
            
            <div className="flex gap-4">
                <Image 
                    src="https://images.pexels.com/photos/30824250/pexels-photo-30824250/free-photo-of-playful-seals-on-rocky-san-diego-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="Random Image" 
                    width={72} 
                    height={96} 
                    className="object-cover rounded-md"
                />

                <div className="flex flex-col justify-between w-full">
                    {/* top */}

                    {/* </title> */}
                    <div className="flex items-center justify-between gap-8">
                     <h3 className="font-semibold">product name</h3>
                     <div className="p-1 bg-gray-50 rounded-sm">$23</div>
                     </div>

                    {/* descryption */}
                    <div className="text-sm text-gray-500"> avaliable</div>


                    {/* bottom? */}
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500"> 2</span>
                        <span className="text-blue-500">remove</span>
                    </div>
                </div>

            </div>

            {/* items    */}
            
            <div className="flex gap-4">
                <Image 
                    src="https://images.pexels.com/photos/30824250/pexels-photo-30824250/free-photo-of-playful-seals-on-rocky-san-diego-shore.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" 
                    alt="Random Image" 
                    width={72} 
                    height={96} 
                    className="object-cover rounded-md"
                />

                <div className="flex flex-col justify-between w-full">
                    {/* top */}

                    {/* </title> */}
                    <div className="flex items-center justify-between gap-8">
                     <h3 className="font-semibold">product name</h3>
                     <div className="p-1 bg-gray-50 rounded-sm">$23</div>
                     </div>

                    {/* descryption */}
                    <div className="text-sm text-gray-500"> avaliable</div>


                    {/* bottom? */}
                    <div className="flex justify-between text-sm">
                        <span className="text-gray-500"> 2</span>
                        <span className="text-blue-500">remove</span>
                    </div>
                </div>

            </div>
            </div>
            
            </>)}
            
        </div>
    )
}

export default CartModel;