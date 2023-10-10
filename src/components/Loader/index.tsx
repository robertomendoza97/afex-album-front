import { LoaderStyles } from "./Styles";
import LoaderSVG from "../../assets/loader.svg?react";
import useVideoContext from "../../customHooks/useVideoContext";
import LABELS from "../../const/labels";

const Loader = () => {
  const { getState } = useVideoContext();

  return (
    <LoaderStyles>
      <div>
        <LoaderSVG />
        <p>{LABELS[getState().loaderMessaje]}</p>
      </div>
    </LoaderStyles>
  );
};

export default Loader;
