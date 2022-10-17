import { faImage } from '@fortawesome/free-regular-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <FontAwesomeIcon className='paperClip' icon={faPaperclip} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FontAwesomeIcon className='image' icon={faImage} />
        </label>
        <button>Send</button>
      </div>
    </div>

  )
}

export default Input