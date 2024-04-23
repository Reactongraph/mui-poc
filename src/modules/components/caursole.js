import React, { useState ,useEffect} from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({ 
    container : {
        width: '100vw',
    },
    carouselimages: {
        width : '100vw',
        height : '80vh'
    }
    
}));

const Caursole = ({images}) => {
    const classes = useStyles();  
  const [currentIndex, setCurrentIndex] = useState(0);
  
   useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images.length]);
  
  return (
    <div>
    <div className={classes.container}>
      <img className={classes.carouselimages} src={images[currentIndex]} alt={`slide ${currentIndex}`} />
    </div>
    </div>
  );
};

export default Caursole;
