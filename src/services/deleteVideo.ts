export const deleteVideo = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/${id}`, {
    method: "DELETE"
  });

  const json = await response.json();

  return json;
};
