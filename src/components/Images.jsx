import useImage from "../redux/useImage";

const Images = ({ images }) => {

    return (
        <div className="images flex flex-wrap justify-center gap-4 bg-[#535660] p-6 rounded-lg max-w-6xl">
            {images.map((img, idx) => {
                return <a
                    href={img.url}
                    key={idx}
                    target='_blank'
                    className='flex flex-col items-center bg-gray-800 p-4 rounded-lg hover:scale-105 duration-300 transition-transform'>
                    <div className="image w-58 h-49 rounded-lg overflow-hidden flex items-center justify-center mb-2">
                        <img
                            src={img.download_url}
                            alt="Random"
                            className='w-full h-full object-cover' />
                    </div>
                    <h3 className='font-semibold text-center'>{img.author}</h3>
                </a>
            })}
        </div>
    )
}

export default Images