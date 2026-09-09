import Images from './components/Images';
import useImage from './redux/useImage';

const App = () => {

  const {
    images,
    page,
    loading,
    error,
    handlePrevPage,
    handleNextPage
  } = useImage();

  if (error) {
    return (
      <div className='min-h-screen w-screen bg-gray-900 text-white flex items-center justify-center'>
        <div className="error text-xl font-bold text-red-500">
          {error}
        </div>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className='min-h-screen w-screen bg-gray-900 text-white flex items-center justify-center'>
        <div className="no-images text-xl font-bold text-gray-300">
          No images found.
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen w-screen bg-gray-900 text-white flex flex-col items-center justify-start p-6'>
      <div className="title font-bold text-2xl text-center text-gray-300 mb-6">
        Gallery
      </div>

      {loading ? (
        <div className='bg-[#535660] p-6 rounded-lg flex items-center justify-center'>
          <div className="loader text-xl font-bold text-gray-300">
            Loading...
          </div>
        </div>
      ) : (
        <Images images={images} />
      )}

      <div className="btns flex items-center gap-4 justify-center mt-6">
        <button
          onClick={() => { if (page !== 1) handlePrevPage() }}
          style={{ opacity: page === 1 ? 0.5 : 1, cursor: page === 1 ? 'not-allowed' : 'default' }}
          className='px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 duration-300 transition-colors'>
          prev
        </button>

        <div className="page-no font-bold text-blue-500">
          Page: {page}
        </div>

        <button
          onClick={() => { handleNextPage() }}
          className='px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 duration-300 transition-colors cursor-pointer'>
          next
        </button>
      </div>
    </div>
  )
}

export default App