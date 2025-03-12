import Slider from "@/components/Slider"
import Images from "@/components/firstimage/Images"
import NewArrival from "@/components/Newarrival/NewArrival"
import SpecialtySection from "@/components/Middlepage/SpecialtySection "


import AntiqueGoldenJewellery from "@/components/AntiqueGoldenJewellery/AntiqueGoldenJewellery"


const HomePage = () => {
  return (
   
    
    <div className=''>
      
      <Slider/>      <SpecialtySection/>

      <AntiqueGoldenJewellery/>

      <NewArrival/>
      <Images/>
      

    </div> 
     
  )
 
}

export default HomePage