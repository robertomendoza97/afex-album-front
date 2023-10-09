import { ReactNode, createContext, useMemo, useReducer } from "react";
import { VideoContextType, VideoState, VideoType } from "../types";
import VideoReducer, { ACTIONS } from "../reducer/VideoReducer";
import Loader from "../components/Loader";

export const VideoContext = createContext<VideoContextType | undefined>(
  undefined
);

interface VideoContextProviderProps {
  children: ReactNode;
}

const initialState: VideoState = {
  linkVideo: "",
  videos: [],
  showModal: true,
  loaderMessaje: "INIT",
  modalContent: <Loader />
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
      },
      editLinkVideo(link: string) {
        dispatch({ type: ACTIONS.EDIT_LINK, payload: link });
      },
      showModal(show: boolean) {
        dispatch({ type: ACTIONS.SHOW_MODAL, payload: show });
      },
      setModalContent(content: ReactNode) {
        dispatch({ type: ACTIONS.SET_MODAL_CONTENT, payload: content });
      },
      setLoaderMsg(msg: string) {
        dispatch({ type: ACTIONS.SET_LOADER_MSG, payload: msg });
      }
    };
  }, [state]);

  return (
    <VideoContext.Provider value={ctxValue}>{children}</VideoContext.Provider>
  );
};
