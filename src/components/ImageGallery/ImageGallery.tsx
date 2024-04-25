import { useState, FC } from 'react';
import { ImageDataType, ModalDataType } from '../types';

import ImageCard from '../ImageCard/ImageCard';
import ImageModal from '../ImageModal/ImageModal';

import css from './ImageGallery.module.css';

type ImageGalleryProps = {
  images: ImageDataType[];
};

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [imageModalData, setImageModalData] = useState<ModalDataType>({
    imageSrc: '',
    imageAltDescription: '',
    imageDescription: '',
    imageAutor: '',
    imageLikes: 0,
  });

  const openModal = (): void => {
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setModalIsOpen(false);
  };

  const onImageClick = (modalData: ModalDataType): void => {
    setImageModalData(modalData);
    openModal();
  };

  return (
    <>
      <ul className={css.imageGallery}>
        {images.map((image) => {
          return (
            <li key={image.id}>
              <ImageCard image={image} onImageClick={onImageClick} />
            </li>
          );
        })}
      </ul>
      {images.length > 0 && (
        <ImageModal
          imageModalData={imageModalData}
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ImageGallery;
