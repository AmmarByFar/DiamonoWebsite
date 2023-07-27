"use client";

import { Slider } from "@/components/ui/volume-slider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Trailer() {
  const videoRef = useRef();
  const timeline = useRef();
  const [video, setVideo] = useState();

  const [currentTime, setCurrentTime] = useState(0);
  const [videoProgress, setVideoProgress] = useState();
  const [volume, setVolume] = useState(1.0);

  const timeUpdate = () => {
    setCurrentTime(video.currentTime);
    setVideoProgress(Math.round((video.currentTime / video.duration) * 100));
  };

  const togglePlay = () => {
    video.paused === true ? video.play() : video.pause();
  };

  const toggleMute = () => {
    setVolume(!volume);
    video.volume === 0 ? (video.volume = 1) : (video.volume = 0);
  };

  const scrubVideo = (e) => {
    const rect = timeline.current.getBoundingClientRect();
    const percent =
      Math.min(Math.max(0, e.pageX - rect.x), rect.width) / rect.width;

    video.currentTime = percent * video.duration;
  };

  const handleVolumeChange = (value) => {
    setVolume(value);
    if (videoRef.current) {
      video.volume = value;
    }
  };

  useEffect(() => {
    setVideo(videoRef.current);
    setCurrentTime(videoRef.current.currentTime);
    videoRef.current.play();
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="h-[100vh] w-[125vw]">
        <video
          ref={videoRef}
          onClick={togglePlay}
          onTimeUpdate={timeUpdate}
          src="/short_cinematic_1080p.mp4"
          className="h-full w-full object-cover object-center"
        ></video>
      </div>

      {video && (
        <div className="absolute bottom-8 w-full px-4 sm:px-14">
          {/* timeline */}
          <div
            ref={timeline}
            onClick={scrubVideo}
            className="flex h-1.5 w-full cursor-pointer items-center border-none bg-primary/30"
          >
            <div
              style={{ width: `${videoProgress}%` }}
              className={`h-full bg-primary ${
                videoProgress && "transition-all duration-300 ease-linear"
              }`}
            ></div>
          </div>

          {/* Controls */}
          <div className="mt-1 flex h-10 items-center gap-4 px-2 sm:px-6">
            <button onClick={togglePlay}>
              <Image
                src={
                  video.paused
                    ? "/icons/play-icon.svg"
                    : "/icons/pause-icon.svg"
                }
                width={14}
                height={14}
                alt="Play/Pause"
              />
            </button>

            <div className="group flex items-center">
              <button onClick={toggleMute}>
                <Image
                  src={
                    video.volume == 0
                      ? "/icons/mute-icon.svg"
                      : "/icons/sound-icon.svg"
                  }
                  width={22}
                  height={22}
                  alt="Play/Pause"
                />
              </button>

              <Slider
                value={[volume]}
                min={0}
                max={1}
                step={0.01}
                onValueChange={(value) => handleVolumeChange(value[0])}
                className="mx-3 hidden h-5 w-28 group-hover:flex "
              />
            </div>

            <p className="ml-5 text-xs text-primary">
              <span>
                {new Date(currentTime * 1000).toISOString().substring(14, 19)}
              </span>{" "}
              /{" "}
              <span>
                {video &&
                  new Date(video?.duration * 1000)
                    .toISOString()
                    .substring(14, 19)}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
