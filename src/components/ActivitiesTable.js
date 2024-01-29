import React from 'react'

const ActivitiesTable = () => {
  return (
<div className="md:px-32 py-8 w-[80%] bg-white rounded-md overflow-x-auto">
<h2 className='text-center text-xl py-2 mb-2'> Activities</h2>
  <div className="shadow overflow-hidden rounded border-b border-gray-200">
    <table className="min-w-full bg-white">
      <thead className="bg-gray-700 text-white">
        <tr>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
          <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Time</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Staff</th>
          <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Action</th>
        </tr>
      </thead>
    <tbody className="text-gray-700">
      <tr>
        <td className="w-1/3 text-left py-3 px-4">Lian</td>
        <td className="w-1/3 text-left py-3 px-4">12:00</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
      <tr className="bg-gray-100">
        <td className="w-1/3 text-left py-3 px-4">Emma</td>
        <td className="w-1/3 text-left py-3 px-4">12:00</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
      <tr>
        <td className="w-1/3 text-left py-3 px-4">Oliver</td>
        <td className="w-1/3 text-left py-3 px-4">12:00</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
      <tr className="bg-gray-100">
        <td className="w-1/3 text-left py-3 px-4">Isabella</td>
        <td className="w-1/3 text-left py-3 px-4">12:00</td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="tel:622322662">622322662</a></td>
        <td className="text-left py-3 px-4"><a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">jonsmith@mail.com</a></td>
      </tr>
      
    </tbody>
    </table>
  </div>
</div>
  )
}

export default ActivitiesTable
