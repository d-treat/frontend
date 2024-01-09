import {
    ChatHeaderProps,
    ChatObject,
    PersonObject,
    Avatar,
  } from "react-chat-engine-advanced";

interface CustomChatHeaderProps extends ChatHeaderProps {
    chat?: ChatObject;
    username: string;
    secret: string;
  }

const ChatHeader = (props: ChatHeaderProps) => {

  
    return (
      <div className=" h-[96px] w-full flex justify-between">
         <div className="flex flex-col pl-4 text-sm justify-center items-start">
            <p className="font-bold">Case Planomia</p>
            <p>Online  -  Dr.Jeremy , Dr.Angelie</p>
         </div>
         <div className=" flex ">
            <button className="pl-4">
                <img src="/icons/Group 30.svg" alt="vr" />
            </button>
            <button className="pl-4">
                <img src="/icons/video call.svg" alt="vr" />
            </button>
            <button className="pl-4">
                <img src="/icons/voice call.svg" alt="vr" />
            </button>
         </div>
        
      </div>
    );
  };
  
  export default ChatHeader;