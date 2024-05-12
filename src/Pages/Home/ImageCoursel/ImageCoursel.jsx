import './ImageCoursel.css'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
function ImageCoursel (){
    

        const [emblaRef ,emblaApi] = useEmblaCarousel({loop:true},[Autoplay({delay:4000})])
    return (
      
        <div className="embla w-full h-[500px]  " ref={emblaRef} >
        <div className="embla__container object-cover w-[100%] h-[100%] border-2 border-gray-600   ">

         
            <img className='embla__slide' src='https://images.velog.io/images/saurabhdev/post/0c1174a8-06f2-49d8-b3bf-d9502c78a88e/Machine-Learning-course-in-Chennai.png'></img>
      

       
          <img className='embla__slide' src='https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg'></img>
         

         
          <img className='embla__slide' src='https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg'></img>
        

        </div>
      </div>
        
    )
}
export default ImageCoursel