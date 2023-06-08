import React from "react";
import {AiOutlineCalendar} from 'react-icons/ai'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BsPersonCircle} from 'react-icons/bs'
import {FcVideoCall} from 'react-icons/fc'
type  CardComponents={
    name: string;
    time: string;

}
export const DocAppointmentCard:React.FC<CardComponents> =({
    name,
    time,

})=>{
    return (
    <div className="flex justify-between m-2">
      <div className="flex justify-between">
        <div className="pt-3"><BsPersonCircle  /></div>
        <div className="pl-2">
      <h2>{name}</h2>
      <div className="flex">
      </div>
      <div className="flex justify-centre">
      <div className="pt-1 pr-1">
        <AiOutlineCalendar  />
        </div>
      <p>{time}</p>
      </div>
      </div>
      </div>
      {/* <div className="pt-3 pr-2 ">
        <FcVideoCall className=""/>
      </div> */}
      
    </div>
  );
}