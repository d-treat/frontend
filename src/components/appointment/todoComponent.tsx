import React from "react";
import {AiOutlineCalendar} from 'react-icons/ai'

type  todoComponents={
    name: string;
    time: string;

}
export const TodoCommponent:React.FC<todoComponents> =({
    name,
    time,

})=>{
    return (
    <div className="p-2">
      <h2>{name}</h2>
      <div className="flex">
        <div className="pt-1 pr-1">
        <AiOutlineCalendar  />
        </div>
      <p>{time}</p>
      </div>
      
    </div>
  );
}