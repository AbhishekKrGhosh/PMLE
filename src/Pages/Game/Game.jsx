
import logo1 from './logo1.png'
import React from 'react'
import MachineLearning from './Machine-Learning.png'
import MathQuiz from './Math-Quiz.png'
import ReactQuiz from './ReactQuiz.png'
import Tictac from './Tictac.png'
import Webdev from './Web-Dev.png'


const Game = () => {

      const data=[
        {
          GameLink:"https://webdevlopment-quiz.onrender.com/",
          GameTitle:"Web_Dev",
          GameImage:Webdev, GameDesc:"Test your knowledge and wit with our React Quiz App! Dive into a world of trivia where every question challenges your intellect. Are you ready to embark on this exhilarating journey of knowledge and fun?"
          
        }
        , 
        {
          GameLink:"https://machine-learning-48y0.onrender.com/",
          GameTitle:"Machine Learning", 
          GameImage:MachineLearning, GameDesc:"Test your knowledge and wit with our React Quiz App! Dive into a world of trivia where every question challenges your intellect.Are you ready to embark on this exhilarating journey of knowledge and fun?"
          
        }, {
          GameLink:"https://tic-tac-toe-alpha-pearl.vercel.app/",
          GameTitle:"Tic-Tac-Toe",
          GameImage:Tictac, GameDesc:"Test your knowledge and wit with our React Quiz App! Dive into a world of trivia where every question challenges your intellect.Are you ready to embark on this exhilarating journey of knowledge and fun?"
          
        }, {
          GameLink:"https://memory-magic-nu.vercel.app/",
          GameTitle:"Memory Magic",
          GameImage:logo1, GameDesc:"Test your knowledge and wit with our React Quiz App! Dive into a world of trivia where every question challenges your intellect. Are you ready to embark on this exhilarating journey of knowledge and fun?"
          
        }, {
          GameLink:"https://math-quiz-app-nine.vercel.app/",
          GameTitle:"Math Quiz",
          GameImage:MathQuiz, GameDesc:"Test your knowledge and wit with our React Quiz App! Dive into a world of trivia where every question challenges your intellect.Are you ready to embark on this exhilarating journey of knowledge and fun?"
          
        }, {
          GameLink:"https://joyful-quiz-app.netlify.app/",
          GameTitle:"React Quiz",
          GameImage:ReactQuiz, GameDesc:"Test your knowledge and wit with our React Quiz App! Dive into a world of trivia where every question challenges your intellect.Are you ready to embark on this exhilarating journey of knowledge and fun?"
        },{
          GameLink:"https://joyful-quiz-app.netlify.app/",
          GameTitle:"React Quiz",
          GameImage:ReactQuiz,
          GameDesc:"Test your knowledge and wit with our React Quiz App! Dive into a world of trivia where every question challenges your intellect.Are you ready to embark on this exhilarating journey of knowledge and fun?"
          
        }


      ]

  return (
    <div className=" h-screen    ">
            <div className='w-[1465px] min-h-full  px-10 py-10 '>

              <div className='w-[100%] min-h-full px-40  grid grid-cols-3 gap-14 overflow-y-visible'>
                   

                 {data.map((item,index)=>{

                  return (
                    <div key={index} className='w-[320px] h-[500px] bg-[#f5f3f3] mb-[50px] rounded-lg shadow-lg shadow-gray-400  '>
                       
                    <div className='w-full h-[50%] '>
                     <img  className='w-full h-full rounded-t-lg hover:scale-110 delay-150' src={item.GameImage}></img>
                    </div>

                    <div className='w-full h-[50%] flex flex-col items-stretch flex-wrap gap-2 mt-2 px-2'>
                      
                      <h1>Game Name : {item.GameTitle}</h1>
                      <p className='text-wrap '>Game Description: {item.GameDesc}</p>

                      <a  className=" hover:scale-105 delay-150 shadow-lg shadow-green-200 font-semibold text-lg mt-1  flex justify-center items-center py-2 bg-green-400 rounded-full" href={item.GameLink} target='_blank'>let's Play</a>
                     
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