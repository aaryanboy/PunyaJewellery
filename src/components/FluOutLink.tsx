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

  return (
    <div 
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="z-20 group relative h-fit w-fit"
    >
      <a href={href} className="relative text-black">
        {children}
        <span 
          style={{ transform: showFlyout ? "scaleX(1)" : "scaleX(0)" }}
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

              
    
    
            className="absolute left-1/2 top-12  bg-white text-black">
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            {FlyoutContent}  
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Flyout content component
const PricingContent = <div className="h-24 w-64 bg-white p-6 shadow-xl">Pricing details here</div>;



const FluOutLink = () => {


  return (
    <div className="flex items-center text-xl px-3 py-13 mt-5 z-30">
    <FlyoutLink href="/">Home</FlyoutLink>
    <div className="p-5"></div>
    <FlyoutLink href="/about" >AboutUs</FlyoutLink>
    <div className="p-5"></div>
  
    <FlyoutLink href=""  FlyoutContent={PricingContent} >Pricing</FlyoutLink>
  </div>
  
  );
};

export default FluOutLink;
