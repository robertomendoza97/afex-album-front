import VideoItem from "../VideoItem";
import { VideosSectionStyles } from "./Styles";
import { useEffect } from "react";
import useVideoContext from "../../customHooks/useVideoContext";
import { useGetAllVideos } from "../../customHooks/useGetAllVideos";
import NoVideos from "../NoVideos";
import LABELS from "../../const/labels";

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

  useEffect(() => {
    if (error && !loading) {
      showModal(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, loading]);

  if (error && !loading) {
    return LABELS.UNSPECTED_ERROR;
  }

  return (
    <>
      {getState().videos.length > 0 ? (
        <VideosSectionStyles>
          {getState().videos.map(video => (
            <VideoItem key={video.ID} video={video} />
          ))}
        </VideosSectionStyles>
      ) : (
        <NoVideos />
      )}
    </>
  );
};

export default VideosSection;
