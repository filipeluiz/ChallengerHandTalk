import React, { useEffect, useRef } from "react"

interface IMovieModuleProps {
  videoSrc: string
  className: string
}

export const Movie: React.FC<IMovieModuleProps> = ({ videoSrc, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const previousUrl = useRef(videoSrc)

  useEffect(() => {
    if (previousUrl.current === videoSrc) {
      return;
    }

    if (videoRef.current) {
      videoRef.current.load();
    }

    previousUrl.current = videoSrc;
  }, [videoSrc]);

  console.log(videoSrc)  
  return (
    <video ref={videoRef} width="640" height="480" className={className} controls>
      <source src="{videoSrc}" type="video/mp4"></source>
    </video>
  )
}

export default Movie
