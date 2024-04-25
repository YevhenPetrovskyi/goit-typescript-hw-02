import { ImageDataType, ModalDataType } from '../types';
import css from './ImageCard.module.css';

type ImageCardProps = {
  image: ImageDataType;
  onImageClick: (modalData: ModalDataType) => void;
};

const ImageCard = ({ image, onImageClick }: ImageCardProps) => {
  const imageData: ModalDataType = {
    imageSrc: image.urls.regular,
    imageAltDescription: image.alt_description,
    imageDescription: image.description,
    imageAutor: image.user.name,
    imageLikes: image.likes,
  };

  return (
    <div className={css.imageCard} onClick={() => onImageClick(imageData)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        width={380}
        height={260}
      />
    </div>
  );
};

export default ImageCard;
