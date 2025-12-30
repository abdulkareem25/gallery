import { useState, useEffect } from 'react';
import Images from './components/Images';

const App = () => {

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(100)

  const getData = async () => {
    const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=8`);
    const data = await response.json();
    setImages(data);
  }

  useEffect(() => {
    getData();
  }, [page])

  return (
    <div className='min-h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-start p-6'>
      <div className="title font-bold text-2xl text-center text-gray-300 mb-6">
        Gallery
      </div>

      <Images images={images} />

      <div className="btns flex items-center gap-4 justify-center mt-6">
        <button
          onClick={() => { if (page !== 100) setPage(page - 1) }}
          style={{ opacity: page === 100 ? 0.5 : 1, cursor: page === 100 ? 'not-allowed' : 'default' }}
          className='px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 duration-300 transition-colors'>
          prev
        </button>

        <div className="page-no font-bold text-blue-500">
          {page - 99}
        </div>

        <button
          onClick={() => setPage(page + 1)}
          className='px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 duration-300 transition-colors cursor-pointer'>
          next
        </button>
      </div>
    </div>
  )
}

export default App