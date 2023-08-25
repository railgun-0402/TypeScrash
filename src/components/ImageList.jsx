import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = (props) => {

    // 画面をスクロールしたら画像をもう一度取得する関数
    const handleScroll = (e) => {
        const element = e.target;
        const {scrollHeight, scrollTop, clientHeight} = element;
        if (scrollHeight - scrollTop === clientHeight) {
            console.log('reach end');
            const newPage = props.page + 1;
            props.setPage(newPage);
            props.onSearchSubmit(props.term, newPage);
        }
    };

    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });

    return (
        <div
          onScroll={handleScroll}
          style={{ height: '1000px', overflow: 'scroll' }}
          className="image-list">{images}
        </div>
      );
};

export default ImageList;