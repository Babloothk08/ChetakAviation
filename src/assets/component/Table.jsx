import React from 'react'

function Table() {
  return (
      <div className='pb-15 '>
        <table className='min-w-7xl mx-auto border border-gray-300 bg-[#103057] border-collapse rounded-2xl'>
        <thead className=''>
          <tr className='text-[#ECAA05] '>
            <th className="border border-gray-300 px-4 py-2 text-center ">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-center">EGCA ID</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Designation AFI</th>
            <th className="border border-gray-300 px-4 py-2 text-center">Company / FTO Name</th>
          </tr>
        </thead>

        <tbody>
          <tr className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Anshul Verma</td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTM2019000624</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Chetak Aviation</td>
          </tr>
      
          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">ANNU Singh </td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTM2022000537</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Chetak Aviation</td>
          </tr>

          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Akash Malik</td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTN2022004721</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Chetak Aviation</td>
          </tr>

          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Samson</td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTM2019001485</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Alchemist</td>
          </tr>
          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Mansi</td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTN2021000231</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Chetak Aviation</td>
          </tr>
          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Tabishq</td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTN2021005511</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Garg Aviation</td>
          </tr>
          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Swarna </td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTN2022000728</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Chimes Aviation Academy</td>
          </tr>
          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Nachiket  </td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTM2023000027</td>
            <td className="border border-gray-300 px-4 py-2 text-center">AFI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Chimes Aviation Academy</td>
          </tr>
          <tr  className='text-white/80'>
            <td className="border border-gray-300 px-4 py-2 text-center">Harvinder</td>
            <td className="border border-gray-300 px-4 py-2 text-center">IPLTM2020021798</td>
            <td className="border border-gray-300 px-4 py-2 text-center">FI </td>
            <td className="border border-gray-300 px-4 py-2 text-center">Pioneer Flying Academy</td>
          </tr>
        </tbody>
      </table>
      </div>
    
  )
}

export default Table
