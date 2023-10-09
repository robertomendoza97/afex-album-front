const getYouTubeVideoId = (link: string): string | null => {
  const regex =
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]+)/i;

  const match = link.match(regex);

  if (match) {
    return match[1];
  } else {
    return null;
  }
};

export default getYouTubeVideoId;
