import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";


const Navbar = () => {
    return (
       <div className='h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
        {/* mobile */} 
        <div className='h-full flex  item-center justify-between md:hidden'>
            
            
            <Link href="/" >
                <div className='text-2xl tracking-wide'> lana  </div> 
            </Link>  
            <Menu/>
        </div>
        {/* biggerscreem */}
<div className='hidden md:flex item-center justify-between gap-8 h-full'>

    {/* left */}
<div className="w-1/3">
<Link href="/" className="flex items-center gap-3" >
<Image src="/logo.png" alt=""  width={24} height={24}/>

                <div className='text-2xl tracking-wide'> lana a </div> 
            </Link>  </div>

 

    {/* right */}

    <div className="w-2/3 flex item-center justify-between gap-8">
    <SearchBar/>
    <NavIcons/>
    </div>



</div>

       </div>
    );
    }

export default Navbar;