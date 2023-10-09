import useFetch from "./useFetch";
import { VideoType } from "../types";

export const useGetAllVideos = () => {
  const data = useFetch<VideoType[]>({
    url: `${import.meta.env.VITE_APP_BASE_URL}`
  });

  return data;
};
