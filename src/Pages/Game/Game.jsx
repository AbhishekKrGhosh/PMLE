
import logo1 from './logo1.png'
import React from 'react'

const Game = () => {

      const data=[
        {
          GameLink:"https://webdevlopment-quiz.onrender.com/",
          GameTitle:"Web_Dev",
          GameImage:logo1
          
        }
        , 
        {
          GameLink:"https://machine-learning-48y0.onrender.com/",
          GameTitle:"Machine Learning", 
          GameImage:logo1
          
        }, {
          GameLink:"https://tic-tac-toe-alpha-pearl.vercel.app/",
          GameTitle:"Tic-Tac-Toe",
          GameImage:logo1
          
        }, {
          GameLink:"https://memory-magic-nu.vercel.app/",
          GameTitle:"Memory Magic",
          GameImage:logo1
          
        }, {
          GameLink:"https://math-quiz-app-nine.vercel.app/",
          GameTitle:"Math Quiz",
          GameImage:logo1
          
        }, {
          GameLink:"https://joyful-quiz-app.netlify.app/",
          GameTitle:"React Quiz",
          GameImage:logo1
          
        },{
          GameLink:"https://joyful-quiz-app.netlify.app/",
          GameTitle:"React Quiz",
          GameImage:logo1
          
        }


      ]







  return (
    <div className=" h-screen    ">
            <div className='w-[1465px] min-h-full  px-10 py-10 '>

              <div className='w-[100%] min-h-full px-40  grid grid-cols-3 gap-14 overflow-y-visible'>
                   

                 {data.map((item,index)=>{

                  return (
                    <div key={index} className='w-[320px] h-[500px] bg-slate-400  mb-[50px] rounded-lg '>
                       
                    <div className='w-full h-[50%] '>
                     <img  className='w-full h-full rounded-t-lg' src={logo1}></img>
                    </div>

                    <div className='w-full h-[50%] '>
                     
                     </div>
                     </div>
                  )
                 })}


                 





              </div>
              
            
              
             
            </div>
            
            

        </div>
  )
}

export default Game