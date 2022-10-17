import { faEllipsis, faUserPlus, faVideoCamera} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Katty</span>
        <div className="chatIcons">
        <FontAwesomeIcon icon={faVideoCamera} />
        <FontAwesomeIcon icon={faUserPlus}/>
        <FontAwesomeIcon icon={faEllipsis}/>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat