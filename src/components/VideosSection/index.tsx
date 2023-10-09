import VideoItem from "../VideoItem";
import { VideosSectionStyles } from "./Styles";
import convertTime from "../../utils/formatDuration";
import { useEffect } from "react";
import useVideoContext from "../../customHooks/useVideoContext";
import { useGetAllVideos } from "../../customHooks/useGetAllVideos";

const VideosSection = () => {
  const { setState, getState, showModal } = useVideoContext();
  const { data, error, loading } = useGetAllVideos();

  useEffect(() => {
    if (data) setState(data);

    if (loading) {
      showModal(true);
    } else {
      showModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (loading) return "loading";
  if (error) return "error";

  return (
    <VideosSectionStyles>
      {getState().videos.map(video => (
        <VideoItem
          key={video.ID}
          duration={convertTime(video.duration)}
          img={video.thumbnail}
          id={video.ID}
        />
      )) || "sin videos por ahora"}
    </VideosSectionStyles>
  );
};

export default VideosSection;
