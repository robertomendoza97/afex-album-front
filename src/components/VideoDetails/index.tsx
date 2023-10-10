import { MouseEvent, useRef } from "react";
import { VideoDetailsStyles } from "./Styles";
import { VideoType } from "../../types";
import useVideoContext from "../../customHooks/useVideoContext";

interface VideoDetailsType {
  video: VideoType;
}
const VideoDetails = ({ video }: VideoDetailsType) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const { getState, showModal } = useVideoContext();
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    showModal(false);
  };
  if (!getState().showModal) {
    return null;
  }

  return (
    <VideoDetailsStyles onClick={handleClick}>
      <div
        ref={videoRef}
        dangerouslySetInnerHTML={{ __html: video.video }}
      ></div>
      <div className="description">
        <h2>{video.title}</h2>
        <pre>{video.description}</pre>
      </div>
      <div onClick={handleClose} className="close" />
    </VideoDetailsStyles>
  );
};

export default VideoDetails;
