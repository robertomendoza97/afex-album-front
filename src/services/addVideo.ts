import { ErrorType, VideoType } from "../types";

const addVideoService = async (id: string): Promise<VideoType | ErrorType> => {
  try {
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${id}`, {
      method: "POST"
    });

    const json = response.json();

    return json as unknown as VideoType;
  } catch (error) {
    return error as ErrorType;
  }
};

export default addVideoService;
