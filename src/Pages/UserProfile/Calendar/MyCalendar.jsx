

import { useState } from 'react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

function MyCalendar() {


  return (
    <div className=''>
      <Calendar className="bg-slate-200 h-[100%] rounded-lg border-none shadow-xl shadow-slate-400"/>
    </div>
  );
}

export default MyCalendar