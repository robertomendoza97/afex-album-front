import { Reducer, ReactNode } from "react";
import { VideoState, VideoType } from "../types";

interface AddActionType {
  type: string;
  payload: VideoType;
}

interface SetStateActionType {
  type: string;
  payload: VideoType[];
}

interface RemoveActionType {
  type: string;
  payload: string;
}

interface EditLinkActionType {
  type: string;
  payload: string;
}

interface ShowModalActionType {
  type: string;
  payload: boolean;
}

interface ShowModalActionType {
  type: string;
  payload: boolean;
}

interface SetModalContentActionType {
  type: string;
  payload: ReactNode;
}

type ActionType =
  | AddActionType
  | RemoveActionType
  | EditLinkActionType
  | SetStateActionType
  | ShowModalActionType
  | SetModalContentActionType;

export const ACTIONS = {
  ADD: "addVideo",
  REMOVE: "removeVideo",
  EDIT_LINK: "editLink",
  SET_STATE: "setState",
  SHOW_MODAL: "showModal",
  SET_MODAL_CONTENT: "setModalContent",
  SET_LOADER_MSG: "setLoaderMessage"
};

const VideoReducer: Reducer<VideoState, ActionType> = (
  state: VideoState,
  action: ActionType
): VideoState => {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        videos: [...state.videos, action.payload as VideoType]
      };

    case ACTIONS.REMOVE:
      return {
        ...state,
        videos: state.videos.filter(video => video.ID !== action.payload)
      };

    case ACTIONS.EDIT_LINK:
      return {
        ...state,
        linkVideo: action.payload as string
      };

    case ACTIONS.SET_STATE:
      return {
        ...state,
        videos: action.payload as VideoType[]
      };
    case ACTIONS.SHOW_MODAL:
      return {
        ...state,
        showModal: action.payload as boolean
      };
    case ACTIONS.SET_MODAL_CONTENT:
      return {
        ...state,
        modalContent: action.payload as ReactNode
      };
    case ACTIONS.SET_LOADER_MSG:
      return {
        ...state,
        loaderMessaje: action.payload as string
      };

    default:
      return state;
  }
};

export default VideoReducer;
