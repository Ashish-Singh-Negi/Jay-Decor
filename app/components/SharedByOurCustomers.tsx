"use client";

import { useRef, useState } from "react";
import { CgPlayButton } from "react-icons/cg";
import { GiMute } from "react-icons/gi";
import { GoMute, GoUnmute } from "react-icons/go";

const videos = [
  "/videos/customer-review-1.mp4",
  "/videos/customer-review-2.mp4",
  "/videos/customer-review-3.mp4",
  "/videos/customer-review-4.mp4",
];

const VideoCard = ({ src, index }: { src: string; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <div
      onClick={togglePlay}
      className="relative w-full aspect-9/16 rounded-xl overflow-hidden bg-black cursor-pointer"
    >
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={`Customer review video ${index + 1}`}
        className="w-full h-full object-cover"
      />

      {!playing && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/30">
          <span className="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center text-2xl">
            <CgPlayButton size={60} className="text-white" />
          </span>
        </span>
      )}

      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute video" : "Mute video"}
        className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white text-sm"
      >
        {muted ? <GoMute /> : <GoUnmute />}
      </button>
    </div>
  );
};

const SharedByOurCustomers = () => {
  return (
    <section
      aria-labelledby="reviews-heading"
      className="w-full py-6 mt-16 bg-primary/5 rounded-t-4xl"
    >
      <div className="w-[90%] md:w-3/4 py-10 mx-auto">
        <div className="text-center">
          <h2
            id="products-heading"
            className="text-xl sm:text-2xl md:text-3xl font-medium"
          >
            Customer reviews
          </h2>
          <p className="text-secondary/70 italic text-sm sm:text-base mt-2">
            In there own words
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {videos.map((src, i) => (
            <VideoCard key={src} src={src} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default SharedByOurCustomers;
