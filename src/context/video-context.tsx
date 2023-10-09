import { ReactNode, createContext, useMemo, useReducer } from "react";
import { VideoContextType, VideoType } from "../types";
import VideoReducer, { ACTIONS } from "../components/reducer/VideoReducer";

export const VideoContext = createContext<VideoContextType | undefined>(
  undefined
);

interface VideoContextProviderProps {
  children: ReactNode;
}

const initialState = {
  linkVideo: "",
  videos: []
};

export const VideoContextProvider = ({
  children
}: VideoContextProviderProps) => {
  const [state, dispatch] = useReducer(VideoReducer, initialState);

  const ctxValue: VideoContextType = useMemo(() => {
    return {
      addVideo(video: VideoType) {
        dispatch({ type: ACTIONS.ADD, payload: video });
      },
      getState() {
        return state;
      },
      removeVideo(id: string) {
        dispatch({ type: ACTIONS.REMOVE, payload: id });
      },
      setState(videos: VideoType[]) {
        dispatch({ type: ACTIONS.SET_STATE, payload: videos });
      }
    };
  }, [state]);

  return (
    <VideoContext.Provider value={ctxValue}>{children}</VideoContext.Provider>
  );
};
