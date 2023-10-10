import { ChangeEvent } from "react";
import LABELS from "../../const/labels";
import { AddSectionStyles } from "./Styles";
import getYouTubeVideoId from "../../utils/youTubeUtils";
import useVideoContext from "../../customHooks/useVideoContext";
import addVideoService from "../../services/addVideo";
import { VideoType } from "../../types";
import Loader from "../Loader";
import Errors from "../Errors";

const AddSection = () => {
  const {
    editLinkVideo,
    getState,
    showModal,
    addVideo,
    setLoaderMsg,
    setModalContent
  } = useVideoContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    editLinkVideo(event.target.value);
  };

  const handleClick = async () => {
    const isValid = getYouTubeVideoId(getState().linkVideo);

    if (isValid) {
      setModalContent(<Loader />);
      setLoaderMsg("SAVING");
      showModal(true);

      const data = await addVideoService(isValid);

      if ("statusCode" in data) {
        const msg =
          data.statusCode === 404
            ? "ERROR_404"
            : data.statusCode === 409
            ? "ERROR_409"
            : "ERROR_500";

        setLoaderMsg(msg);
        setModalContent(<Errors />);
        return;
      }

      setModalContent(<Errors />);
      addVideo(data as VideoType);
      setLoaderMsg("SAVED");
    } else {
      setLoaderMsg("INVALID_LINK");
      setModalContent(<Errors />);
      showModal(true);
    }
  };

  return (
    <AddSectionStyles>
      <input type="text" onChange={handleChange} placeholder={LABELS.ADD} />
      <button onClick={handleClick}>{LABELS.ADD}</button>
    </AddSectionStyles>
  );
};

export default AddSection;
