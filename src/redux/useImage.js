import { fetchImages } from "./image.api";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImagesRequest,
  fetchImagesSuccess,
  fetchImagesFailure,
  prevPage,
  nextPage
} from "./image.slice";


const useImage = () => {
  const dispatch = useDispatch();
  const { images, page, loading, error } = useSelector((state) => state.images);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchImagesRequest());
      try {
        const data = await fetchImages(page);
        dispatch(fetchImagesSuccess(data));
      } catch (error) {
        dispatch(fetchImagesFailure(error.message));
      } 
    };

    fetchData();
  }, [dispatch, page]);

  const handlePrevPage = () => {
    dispatch(prevPage());
  };

  const handleNextPage = () => {
    dispatch(nextPage());
  }

  return {
    images,
    page,
    loading,
    error,
    handlePrevPage,
    handleNextPage
  };
}

export default useImage;