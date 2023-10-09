import useVideoContext from "../../customHooks/useVideoContext";
import { deleteVideo } from "../../services/deleteVideo";
import Errors from "../Errors";
import Loader from "../Loader";
import { VideoItemStyles } from "./Styles";

interface VideoItemProps {
  img: string;
  duration: string;
  id: string;
}

const VideoItem = ({ img, duration, id }: VideoItemProps) => {
  const { removeVideo, showModal, setModalContent, setLoaderMsg } =
    useVideoContext();

  const handleRemove = (id: string) => {
    setModalContent(<Loader />);
    setLoaderMsg("DELETING");
    showModal(true);

    deleteVideo(id).then(() => {
      removeVideo(id);
      setModalContent(<Errors />);
      setLoaderMsg("DELETED");
    });
  };

  return (
    <VideoItemStyles $img={img}>
      <div className="close" onClick={() => handleRemove(id)} />
      <div className="duration">{duration}</div>
    </VideoItemStyles>
  );
};

export default VideoItem;
