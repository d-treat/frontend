import Head from 'next/head'
import Image from 'next/legacy/image'
import React from 'react'
import { FiSearch, FiSend } from 'react-icons/fi'
import { MultiChatWindow, MultiChatSocket,MessageFormProps, useMultiChatLogic, ChatHeaderProps, MessageListProps, ChatCardProps, ChatFeed,  } from 'react-chat-engine-advanced';
import MessageForm from "./messageForm";
import ChatHeader from './chatHeader';
import MessageList from './messageList';
import  ChatCard  from './chatCard';
import { Context } from "./functions/context";
import { useContext, CSSProperties } from "react";


// import { projectId } from "./functions/constants";

const projectId = 'e75815e8-0423-4b05-9d2e-cc3e87b01828';
const username = 'mugisha';
const secret = '12345';


const ChatsPage = () => {

     
    // Hooks
    // const { user } = useContext(Context);
    // // Chat Engine Hooks
    // const username: string = user ? user.username : "";
    // const secret: string = user && user.secret !== null ? user.secret : "";
    const chatProps = useMultiChatLogic(projectId, username, secret);
    return (
        <>,
            <Head>
                <title>D-treat - Chat</title>
            </Head>
            <div className='w-full h-screen flex relative '>
            

            <MultiChatWindow style={{height:"90vh", width:"100%"}}  {...chatProps} 
             renderChatSettings={() => <div className="ce-empty-settings" />}

            //  renderChatFeed={(props: ChatFeedProps)=>(
            //     <ChatFeed {...props} />
            //  )}

            //  renderMessageForm={(props: MessageFormProps) => (
            //     <MessageForm 
            //     {...props} />
            //   )}

            //   renderChatCard={(props: ChatCardProps) => (
            //     <ChatCard
            //       {...props}
            //       username={chatProps.username}
            //       onChatCardClick={chatProps.onChatCardClick}
            //       isActive={
            //         props.chat !== undefined &&
            //         chatProps.activeChatId === props.chat.id
            //       }
            //       chat={props.chat}
            //     />
            //   )}
            // renderMessageList={(props: MessageListProps) => (
            //     <MessageList {...props} />
            //   )}

              renderChatHeader={(props: ChatHeaderProps) => (
                <ChatHeader
                  {...props}/>
              )}

            />

            </div>
        </>
    )
}

export default ChatsPage
