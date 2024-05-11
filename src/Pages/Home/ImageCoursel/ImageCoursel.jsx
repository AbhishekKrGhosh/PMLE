import './ImageCoursel.css'
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
function ImageCoursel (){
    

        const [emblaRef ,emblaApi] = useEmblaCarousel({loop:true},[Autoplay({delay:4000})])
    return (
      
        <div className="embla w-full h-[500px]  " ref={emblaRef} >
        <div className="embla__container ">

          <div className="embla__slide  flex justify-center items-center" >
            <img className='w-[100%] h-[100%]'  src='https://png.pngtree.com/thumb_back/fh260/back_pic/02/50/63/71577e1cf59d802.jpg'></img>
          </div>

          <div className="embla__slide flex justify-center items-center w-full">
          <img className='w-[100%] h-[100%]' src='https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg'></img>
          </div>

          <div className="embla__slide flex justify-center items-center">
          <img className='w-[100%] h-[100%]' src='https://images.pexels.com/photos/573130/pexels-photo-573130.jpeg?cs=srgb&dl=pexels-zyuliansyah-573130.jpg&fm=jpg'></img>
          </div>

        </div>
      </div>
        
    )
}
export default ImageCoursel