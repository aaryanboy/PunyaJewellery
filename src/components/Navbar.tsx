import Link from "next/link";
import Menu from "./Menu";


const Navbar = () => {
    return (
       <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        {/* mobile */} 
        <div className='h-full flex  item-center justify-between'>
            
            
            <Link href="/" >
                <div className='text-2xl tracking-wide'> lana  </div> 
            </Link>  
            <Menu/>
        </div>
        {/* biggerscreem */}
<div className='hidden md:flex item-center justify-between h-full'></div>

       </div>
    );
    }

export default Navbar;