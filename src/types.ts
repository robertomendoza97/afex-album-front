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
}

export interface VideoContextType {
  getState: () => VideoState;
  addVideo: (video: VideoType) => void;
  removeVideo: (id: string) => void;
  setState: (videos: VideoType[]) => void;
}
