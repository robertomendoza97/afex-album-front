import { ReactNode } from "react";
export interface VideoType {
  ID: string;
  title: string;
  description: string;
  duration: string;
  thumbnail: string;
  video: string;
}

export interface VideoState {
  linkVideo: string;
  videos: VideoType[];
  showModal: boolean;
  modalContent: ReactNode;
  loaderMessaje: string;
}

export interface VideoContextType {
  getState: () => VideoState;
  addVideo: (video: VideoType) => void;
  removeVideo: (id: string) => void;
  setState: (videos: VideoType[]) => void;
  editLinkVideo: (id: string) => void;
  showModal: (show: boolean) => void;
  setModalContent: (content: ReactNode) => void;
  setLoaderMsg: (msg: string) => void;
}

export interface ErrorType {
  statusCode: number;
  message: string;
  error: string;
}
