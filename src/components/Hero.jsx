import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from "../utils"
import { useEffect, useState } from "react"

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 640 ? smallHeroVideo : heroVideo)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 640) {setVideoSrc(smallHeroVideo)} else {setVideoSrc(heroVideo)}
  };

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2.5 })
  }, [])

  return (
	<section className='w-full nav-height bg-black relative'>
    <div className="h-5/6 w-full flex-center flex-col">
      <p id="hero" className='hero-title'>iPhone 15 Pro</p>
      <div className="md:w-10/12 w-9/12">
        <video src={videoSrc} type="video/mp4" autoPlay muted playsInline={true} key={videoSrc} className="pointer-events-none" />
      </div>
    </div>
    <div id="cta" className="flex flex-col items-center mt-5 opacity-0 translate-y-20">
      <a href="#Highlights" className="btn">Buy</a>
      <p className="font-normal text-xl">From $199/month or $999</p>
    </div>
  </section>
  );
};

export default Hero;