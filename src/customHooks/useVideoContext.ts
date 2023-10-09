import { useContext } from "react";
import { VideoContext } from "../context/video-context";
import { VideoContextType } from "../types";

const useVideoContext = (): VideoContextType => {
  const ctx = useContext(VideoContext);

  return ctx as VideoContextType;
};

export default useVideoContext;
