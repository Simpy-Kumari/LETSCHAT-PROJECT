import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://th.bing.com/th/id/OIP.B9rVfpfvgNG4ukewOk-UGgHaE8?w=203&h=136&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        { <img src="https://th.bing.com/th/id/OIP.B9rVfpfvgNG4ukewOk-UGgHaE8?w=203&h=136&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" /> }
      </div>
    </div>
  )
}
export default Message