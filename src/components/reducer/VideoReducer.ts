import { Reducer } from "react";
import { VideoState, VideoType } from "../../types";

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

type ActionType =
  | AddActionType
  | RemoveActionType
  | EditLinkActionType
  | SetStateActionType;

export const ACTIONS = {
  ADD: "addVideo",
  REMOVE: "removeVideo",
  EDIT_LINK: "editLink",
  SET_STATE: "setState"
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

    default:
      return state;
  }
};

export default VideoReducer;
