import React from 'react'

const App = () => {

  return (
    <div className='min-h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-start p-6'>
      <div className="title font-bold text-2xl text-center text-gray-300 mb-6">Gallery</div>

      <div className="images flex flex-wrap justify-center gap-4 bg-[#535660] p-6 rounded-lg max-w-6xl">
        <a href="" className='flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:scale-105 duration-300 transition-transform'>
          <div className="image w-58 h-49 rounded-lg overflow-hidden flex items-center justify-center mb-2">
            <img src="https://picsum.photos/200" alt="Random" className='w-full h-full object-cover' />
          </div>
          <h3 className='font-semibold text-center'>Abdul Kareem</h3>
        </a>
      </div>

      <div className="btns flex items-center gap-4 justify-center mt-6">
        <button className='px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 duration-300 transition-colors'>prev</button>
        <div className="page-no font-bold text-blue-500">8</div>
        <button className='px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 duration-300 transition-colors'>next</button>
      </div>

    </div>
  )
}

export default App
