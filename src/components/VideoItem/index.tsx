import useVideoContext from "../../customHooks/useVideoContext";
import { deleteVideo } from "../../services/deleteVideo";
import { VideoItemStyles } from "./Styles";

interface VideoItemProps {
  img: string;
  duration: string;
  id: string;
}

const VideoItem = ({ img, duration, id }: VideoItemProps) => {
  const { removeVideo } = useVideoContext();
  const handleRemove = (id: string) => {
    deleteVideo(id).then(() => removeVideo(id));
  };

  return (
    <VideoItemStyles $img={img}>
      <div className="close" onClick={() => handleRemove(id)} />
      <div className="duration">{duration}</div>
    </VideoItemStyles>
  );
};

export default VideoItem;
