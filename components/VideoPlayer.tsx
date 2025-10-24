import React, { useEffect, useRef } from 'react';

declare const Hls: any;

interface VideoPlayerProps {
  src: string;
  channelName: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, channelName }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: any;

    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(error => console.error("Autoplay was prevented:", error));
        });
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src;
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(error => console.error("Autoplay was prevented:", error));
        });
      }
    } else {
        video.src = src;
        video.play().catch(error => console.error("Autoplay was prevented:", error));
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [src]);

  return (
    <div className="relative w-full bg-black shadow-lg shadow-purple-500/30 rounded-2xl overflow-hidden border border-gray-800">
      <div className="w-full aspect-video bg-gray-900 flex items-center justify-center">
        <video
          ref={videoRef}
          controls
          autoPlay
          playsInline
          className="w-full h-full"
        />
      </div>
       <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pointer-events-none">
        <h2 className="text-white text-xl font-bold truncate">{channelName}</h2>
      </div>
    </div>
  );
};

export default VideoPlayer;