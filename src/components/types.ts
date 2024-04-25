export type ImageDataType = {
  id: string;
  description?: string;
  alt_description?: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
};

export type ModalDataType = {
  imageSrc: string;
  imageAltDescription?: string;
  imageDescription?: string;
  imageAutor?: string;
  imageLikes?: number;
};

export type ApiResponseType = {
  total: number;
  total_pages: number;
  results: ImageDataType[];
};
