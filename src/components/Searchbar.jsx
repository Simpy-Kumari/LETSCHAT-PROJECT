import React from 'react'

const Searchbar = () => {
  return (
    <div className='searchbar'>
      <div className="searchForm">
        <input type="text" placeholder='Search or start new chat' />
      </div>
      <div className="userChat">
        <img src="https://th.bing.com/th/id/OIP.Fe9JpwoJqtysnkYw32ZCMgHaLH?w=203&h=304&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        <div className="userInfo">
          <span>James</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Searchbar