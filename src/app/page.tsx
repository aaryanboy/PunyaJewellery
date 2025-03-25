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
      <AntiqueGoldenJewellery2/>
      <div className="m-50 p-10">jhj</div>


      <BlogSection/>


      <div className="m-50 p-10">hjh</div>
    
      

    </div> 
     
  )
 
}

export default HomePage