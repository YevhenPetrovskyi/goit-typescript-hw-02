import { useEffect, useState } from 'react';
import { handleFetchPhotos } from '../API/unsplash-api';
import toast, { Toaster } from 'react-hot-toast';
import { ImageDataType } from './types';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import ErrorMessage from './ErrorMessage/ErrorMessage';
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn';

function App() {
  const [query, setQuery] = useState<string>('');
  const [images, setImages] = useState<ImageDataType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [loadMoreBtn, setLoadMoreBtn] = useState<boolean>(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchPhotos = async () => {
      try {
        setError(false);
        setLoading(true);
        setLoadMoreBtn(false);
        const data = await handleFetchPhotos(query, page);
        if (data.total === 0) {
          setImages([]);
          setErrorMsg(
            "Sorry, I couldn't find pictures for your entry please try again."
          );
          setError(true);
        } else {
          setImages((prevImages) => prevImages.concat(data.results));
          setLoadMoreBtn(!!data.total_pages && data.total_pages !== page);
          if (page === 1) {
            toast.success(`${data.total} photos were found for your request`, {
              position: 'top-right',
            });
          }
        }
      } catch (error) {
        setErrorMsg(
          'Somse error occurred while trying to fetch photos. Please try again later.'
        );
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, [query, page]);

  const handleSearch = (searchQuery: string): void => {
    if (searchQuery !== query) {
      setQuery(searchQuery);
      setPage(1);
      setImages([]);
    }
  };

  const handleSearchNextPage = (): void => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      <Toaster />
      {error && <ErrorMessage message={errorMsg} />}
      {images.length > 0 && <ImageGallery images={images} />}
      {loading && <Loader />}
      {loadMoreBtn && <LoadMoreBtn onLoadMore={handleSearchNextPage} />}
    </>
  );
}

export default App;
