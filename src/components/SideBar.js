import React from 'react'

const SideBar = () => {
  return (
    <div className=' bg-[#ffbdd6] overflow-y-auto'>
    <h1 className='text-2xl  p-6 font-bold'>Staff Area</h1>
      <ul className='flex flex-col mt-10 gap-2 text-xl w-full'>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>My Accounts</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Activites</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Orders</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Customers</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Analytics</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Finances</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Products</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Vouchers</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Discounts</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Banners and Automations</a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Live Chat </a></li>
        <li className='text-sm hover:bg-black pl-6  py-4  hover:text-white '><a href='#'>Staff </a></li>
      </ul>
    </div>
  )
}

export default SideBar
