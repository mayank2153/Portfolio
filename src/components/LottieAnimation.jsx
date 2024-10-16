import React from 'react';
import Lottie from 'react-lottie';
import scrollDownAnimation from "./scrollDownAnimation.json"

const LottieAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scrollDownAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='pt-200 md:pt-0'>
      <Lottie options={defaultOptions} height={100} width={100} />
    </div>
  );
}

export default LottieAnimation;
