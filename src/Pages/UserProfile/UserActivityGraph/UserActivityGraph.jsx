

import { LineChart, Line, CartesianGrid, XAxis, YAxis, AreaChart ,Area} from 'recharts';
import LabelY from './LabelY';
import LabelX from './LabelX';
function UserActivityGraph (){
       
    const data = [
        {
          "name": "Page A",
          "uv": 4.7,
          "pv": 2400,
          "amt": 2400,
          "time":1
        },
        {
          "name": "Page B",
          "uv": 3,
          "pv": 1398,
          "amt": 2210,
          "time":2
        },
        {
          "name": "Page C",
          "uv": 4.5,
          "pv": 9800,
          "amt": 2290,
          "time":3
        },
        {
          "name": "Page D",
          "uv": 1.6,
          "pv": 3908,
          "amt": 2000,
          "time":4
        },
        {
          "name": "Page E",
          "uv": 1,
          "pv": 4800,
          "amt": 2181,
          "time":5
        },
        {
          "name": "Page F",
          "uv": 2.3,
          "pv": 3800,
          "amt": 2500,
          "time":6
        },
        {
          "name": "Page G",
          "uv": 3.4,
          "pv": 4300,
          "amt": 2100,
          "time":7
        }
      ]

      

    return (

        <div className='bg-slate-200 pt-2 pb-4 rounded-lg shadow-lg shadow-slate-400 w-[92%] flex flex-col items-center'>
          <h1 className='pb-2 text-xl'>Time Spend Anaylsis </h1>
         
          
        <AreaChart className='bg-[#fafffb]' width= {1250}height={300} data={data} margin={{ top: 10, right: 40, bottom: 5, left: 0}}>
      
        {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" /> */}
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis dataKey="time" label={{ value: 'Hours', angle: -90, position: 'insideMiddle' }}/>
       </AreaChart>
     
           
      </div>
    )
}


export default UserActivityGraph