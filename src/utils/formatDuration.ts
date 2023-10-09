const convertTime = (timeString: string): string => {
  const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(\d+)S/;
  const match = timeString.match(regex);

  if (!match) {
    throw new Error("El formato de tiempo no es válido.");
  }

  const horas = match[1] ? `${match[1]}:` : "";
  const minutos = match[2] ? `${match[2]}:` : "0:";
  const segundos = match[3];

  return `${horas}${minutos}${segundos}`;
};

export default convertTime;
