import { MouseEvent } from "react";
import useVideoContext from "../../customHooks/useVideoContext";
import { deleteVideo } from "../../services/deleteVideo";
import { VideoType } from "../../types";
import convertTime from "../../utils/formatDuration";
import Errors from "../Errors";
import Loader from "../Loader";
import VideoDetails from "../VideoDetails";
import { VideoItemStyles } from "./Styles";

interface VideoItemProps {
  video: VideoType;
}

const VideoItem = ({ video }: VideoItemProps) => {
  const { removeVideo, showModal, setModalContent, setLoaderMsg } =
    useVideoContext();

  const { thumbnail, duration, ID } = video;

  const handleRemove = (id: string, e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setModalContent(<Loader />);
    setLoaderMsg("DELETING");
    showModal(true);

    deleteVideo(id).then(() => {
      removeVideo(id);
      setModalContent(<Errors />);
      setLoaderMsg("DELETED");
    });
  };

  const handleClick = (video: VideoType) => {
    setModalContent(<VideoDetails video={video} />);
    setLoaderMsg("keep");
    showModal(true);
  };

  return (
    <VideoItemStyles $img={thumbnail} onClick={() => handleClick(video)}>
      <div
        className="close"
        onClick={(e: MouseEvent<HTMLDivElement>) => handleRemove(ID, e)}
      />
      <div className="duration">{convertTime(duration)}</div>
    </VideoItemStyles>
  );
};

export default VideoItem;
