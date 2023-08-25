import React from 'react';
import ImageModal from './ImageModal';

const ImageCard = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [spans, setSpans] = React.useState(0);    
    const imageRef = React.useRef(null);

    const calculateSpans = () => {
        const height = imageRef.current.clientHeight;
        setSpans(Math.ceil(height/10));
    };

    React.useEffect(() => {
        imageRef.current.addEventListener('load', calculateSpans);
    });

    const { description, urls } = props.image;

    return (
        <>
        <div style={{ gridRowEnd: `span ${spans}` }}>          
          <img className='ImageCard' onClick={() => setModalShow(true)} ref={imageRef} alt={description} src={urls.regular} />
        </div>

        <ImageModal
        image={props.image}
        show={modalShow}
        onHide={() => setModalShow(false)}
        size={"lg"}
        />
        </>
        
    );
}

export default ImageCard;