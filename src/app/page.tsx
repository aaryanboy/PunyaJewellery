import Slider from "@/components/Slider"
import Images from "@/components/firstimage/Images"
import NewArrival from "@/components/Newarrival/NewArrival"
import SpecialtySection from "@/components/Middlepage/SpecialtySection "
import AntiqueGoldenJewellery2 from "@/components/AntiqueGoldenJewellery/AntiqueGoldenJewellery2"

import AntiqueGoldenJewellery from "@/components/AntiqueGoldenJewellery/AntiqueGoldenJewellery"
import BlogSection from "@/components/Blogpage/BlogSection"


const HomePage = () => {
  return (
   
    
    <div className=''>
      
      <Slider/>      
      <SpecialtySection/>

      <AntiqueGoldenJewellery/>

      <NewArrival/>
      <Images/>
      <SpecialtySection/>
      <AntiqueGoldenJewellery2/>


      <BlogSection/>


      
    
      

    </div> 
     
  )
 
}

export default HomePage