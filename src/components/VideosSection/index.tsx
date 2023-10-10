import VideoItem from "../VideoItem";
import { VideosSectionStyles } from "./Styles";
import { useEffect } from "react";
import useVideoContext from "../../customHooks/useVideoContext";
import { useGetAllVideos } from "../../customHooks/useGetAllVideos";
import NoVideos from "../NoVideos";

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

  if (error) return "error";

  return (
    <>
      {getState().videos.length > 0 ? (
        getState().videos.map(video => (
          <VideosSectionStyles>
            <VideoItem key={video.ID} video={video} />
          </VideosSectionStyles>
        ))
      ) : (
        <NoVideos />
      )}
    </>
  );
};

export default VideosSection;
