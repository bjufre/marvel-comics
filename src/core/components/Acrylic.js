import React from 'react';


const addImage = (styles, image) => ({
  ...styles,
  background: `#000 url(${image}) no-repeat center/100%`,
});

export default ({
  image,
  children,
}) => (
  <div className="marvel-comics-acrylic" style={styles.wrapper}>
    <div className="marvel-comics-acrylic__container" style={addImage(styles.container, image)}>
      <div className="marvel-comics-acrylic__before" style={addImage(styles.before, image)}></div>
      <div className="marvel-comics-acrylic__after" style={styles.after}></div>
    </div>
    {children}
  </div>
)

const styles = {};

styles.wrapper = {
  position: 'relative',
  width: '100%',
  height: '100%',
}

styles.container = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundSize: 'cover',
  overflow: 'hidden',
}

styles.before = {
  // width: 'calc(100% + 50px)',
  // height: 'calc(100% + 50px)',
  width: 'calc(100% + 75px)',
  height: 'calc(100% + 75px)',
  position: 'absolute',
  top: '-25px',
  // left: '-25px',
  left: '-33px',
  backgroundBlendMode: 'exclusion',
  backgroundSize: 'cover',
  filter: 'blur(25px)',
}

styles.after = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  boxShadow: '0 0 3px rgba(#000 .1)',
  backgroundImage: `url("http://api.thumbr.it/whitenoise-361x370.png?background=ffffff00&noise=a0a0a0&density=35&opacity=10")`,
  backgroundColor: 'rgba(0, 0, 0, .5)',
}
