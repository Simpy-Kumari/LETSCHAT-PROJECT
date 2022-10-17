import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">LETSCHAT</span>
      <div className="user">
        <img src="https://th.bing.com/th/id/OIP.B9rVfpfvgNG4ukewOk-UGgHaE8?w=203&h=136&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        <span>Simpy</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar