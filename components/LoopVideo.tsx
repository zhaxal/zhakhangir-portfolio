import { FC, useEffect, useRef } from "react";

interface Props {
  src: string;
  poster: string;
  width: number;
  height: number;
}

/**
 * A short silent clip that plays on loop while it is on screen. Nothing is
 * downloaded until it scrolls near the viewport, and with reduced motion on it
 * stays on its poster frame.
 */
const LoopVideo: FC<Props> = ({ src, poster, width, height }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Browsers only autoplay muted media, and React doesn't always render the
    // muted attribute, so set the property before asking it to play.
    video.muted = true;
    const play = () => video.play().catch(() => {});

    if (!("IntersectionObserver" in window)) {
      play();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play();
        else video.pause();
      },
      { rootMargin: "200px" }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      width={width}
      height={height}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
    />
  );
};

export default LoopVideo;
