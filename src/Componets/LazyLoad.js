import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ src, alt }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } 
    );


    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

  
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  return (
    <img
      ref={imgRef}
      src={isVisible ? src : 'https://via.placeholder.com/300/ffffff/cccccc?text=Loading...'} 
      alt={alt}
      style={{ width: '465px', height: '400px', margin: '20px', objectFit: 'cover' }}
    />
  );
};

const LazyLoad = () => {
  const images = [
    'https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg',
    'https://t3.ftcdn.net/jpg/06/57/28/86/240_F_657288628_8NS9kictxUV4FfSUx3cDOZJTL3hKeayZ.jpg',
    'https://t4.ftcdn.net/jpg/06/57/28/55/240_F_657285579_cYcmCwffWAzrQQnnu94BSh6J2BXM9GnO.webp',
    'https://t3.ftcdn.net/jpg/09/02/70/18/240_F_902701862_jn8Zc5sOemEZEdLfdycrG0NuBPyB4hUq.jpg',
    'https://t4.ftcdn.net/jpg/06/57/28/71/240_F_657287145_tdedhk7ecFYcA3QXKDOYxb8rxNQAxsva.jpg',
    'https://t4.ftcdn.net/jpg/06/57/28/87/240_F_657288736_qbp1T40ckNrk6Klho09GZoYcj0BGI2MR.jpg',
    'https://img.freepik.com/free-photo/closeup-shot-beautiful-butterfly-with-interesting-textures-orange-petaled-flower_181624-7640.jpg',
    'https://t3.ftcdn.net/jpg/06/57/28/86/240_F_657288628_8NS9kictxUV4FfSUx3cDOZJTL3hKeayZ.jpg',
    'https://t4.ftcdn.net/jpg/06/57/28/55/240_F_657285579_cYcmCwffWAzrQQnnu94BSh6J2BXM9GnO.webp',
    'https://t3.ftcdn.net/jpg/09/02/70/18/240_F_902701862_jn8Zc5sOemEZEdLfdycrG0NuBPyB4hUq.jpg',
    'https://t4.ftcdn.net/jpg/06/57/28/71/240_F_657287145_tdedhk7ecFYcA3QXKDOYxb8rxNQAxsva.jpg',
    'https://t4.ftcdn.net/jpg/06/57/28/87/240_F_657288736_qbp1T40ckNrk6Klho09GZoYcj0BGI2MR.jpg',
  ];

  return (
    <div style={{ maxHeight: '100vh', overflowY: 'auto' }}>
      <h2>Lazy Load Images on Scroll</h2>
      <div>
        {images.map((src, index) => (
          <LazyImage key={index} src={src} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default LazyLoad;

