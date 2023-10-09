import useFetch from "./useFetch";

export const useRemoveVideo = (id: string) => {
  const data = useFetch({
    url: `${import.meta.env.VITE_APP_BASE_URL}/${id}`,
    options: { method: "DELETE" }
  });

  return data;
};
