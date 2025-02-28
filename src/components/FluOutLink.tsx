import React, { ReactNode, useState} from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FlyoutLinkProps {
  children: ReactNode;
  href: string;
  FlyoutContent?: ReactNode;
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);
  const showFlyout = open && FlyoutContent;

  // Handle both hover and touch interactions
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (FlyoutContent) {
      e.preventDefault(); // Prevent page reload
      setOpen((prev) => !prev); // Toggle dropdown
    }
  };

  return (
    <div 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="z-20 group relative h-fit w-fit"
    >
      <a href={href}  onClick={handleClick} className="relative text-black">
        {children}
        <span style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>

      <AnimatePresence>
        {showFlyout && (
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}

            transition={{ duration: 0.3, ease: "easeOut" }}
            
            style={{x:"-50%"}}

              
    
    
            className="absolute left-1/2 top-12   text-black">
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white bg-opacity-85 " />
            {FlyoutContent}  
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Flyout content components
const PricingContent = (
  <div className="h-auto w-[450px] bg-white bg-opacity-85 p-6 shadow-2xl rounded-lg border border-gray-200">
 
    <div className="flex justify-between gap-8">
      {/* Gold Jewelry Section */}
      <div className="p-4 flex-1">
        <h3 className="text-xl  cursor-pointer"><a href="/Products/Gold">Gold</a>  </h3>
        <ul className="mt-2 space-y-2 text-gray-500 text-base cursor-pointer" >
          <li className="hover:text-yellow-600 transition">Necklace</li>
          <li className="hover:text-yellow-600 transition ">Earrings</li>
          <li className="hover:text-yellow-600 transition">Bracelet</li>
          <li className="hover:text-yellow-600 transition">Ring</li>
          <li className="hover:text-yellow-600 transition">Anklet</li>
        </ul>
      </div>

      {/* Silver Jewelry Section */}
      <div className="p-4   flex-1">
        <h3 className="text-xl    cursor-pointer"><a href="/Products/Silver">Silver</a> </h3>
        <ul className="mt-2 space-y-2 text-gray-700 text-base cursor-pointer">
          <li className="hover:text-gray-500 transition">Necklace</li>
          <li className="hover:text-gray-500 transition">Earrings</li>
          <li className="hover:text-gray-500 transition"> Bracelet</li>
          <li className="hover:text-gray-500 transition"> Ring</li>
          <li className="hover:text-gray-500 transition"> Anklet</li>
        </ul>
      </div>
    </div>
  </div>
);




const FluOutLink = () => {


  return (
    <div className="flex items-center text-lg font-sans tracking-wide px-3 py-13 mt-5 z-30 whitespace-nowrap">
    <FlyoutLink href="/">Home</FlyoutLink>
    <div className="p-2"></div>
    <FlyoutLink href="/about" >About Us</FlyoutLink>
    <div className="p-2"></div>
    <FlyoutLink href="" FlyoutContent={PricingContent} >Products</FlyoutLink>
  </div>
  
  
  );
};

export default FluOutLink;
