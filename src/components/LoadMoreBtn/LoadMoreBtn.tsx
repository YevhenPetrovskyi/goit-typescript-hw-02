import { FC } from 'react';
import css from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
  onLoadMore: () => void;
};

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onLoadMore }) => {
  return (
    <button
      className={css.loadMoreBtn}
      onClick={() => onLoadMore()}
      type="button"
      title="Load more"
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;
