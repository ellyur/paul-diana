import { useAnimationContext } from '@/contexts/AnimationContext';

// Image loop images - New urban nighttime prenup photos
const imageLoop1 = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851676/imageLoop_ep3c2l.jpg";
const imageLoop2 = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851676/imageLoop1_uuvkmn.jpg";
const imageLoop3 = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851676/imageLoop2_xrkge1.jpg";
const imageLoop4 = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851677/imageLoop4_ty9oei.jpg";
const imageLoop5 = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851677/imageLoop5_frdadk.jpg";
const imageLoop6 = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851681/imageLoop6_r4gnxb.jpg";
const imageLoop7 = "https://res.cloudinary.com/dnlreax2z/image/upload/v1759851677/imageLoop7_hxtvrr.jpg";

const ImageLoop = () => {
  const { animationsEnabled } = useAnimationContext();
  const images = [
    imageLoop1,
    imageLoop2,
    imageLoop3,
    imageLoop4,
    imageLoop5,
    imageLoop6,
    imageLoop7,
    imageLoop1,
    imageLoop2
  ];

  return (
    <section id="slideshow" className="image-loop-section section-hard-blue w-full overflow-hidden py-4">
      <div className="image-loop-container">
        <div className={`${animationsEnabled ? 'image-loop-track' : 'image-loop-track-static'}`}>
          {/* First set of images */}
          {images.map((image, index) => (
            <div key={`set1-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1}`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-${index + 1}`}
              />
            </div>
          ))}
          {/* Duplicate set for seamless looping */}
          {images.map((image, index) => (
            <div key={`set2-${index}`} className="image-loop-item">
              <img
                src={image}
                alt={`Urban nighttime couple moment ${index + 1} duplicate`}
                className="image-loop-img"
                loading="lazy"
                data-testid={`img-loop-dup-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageLoop;
