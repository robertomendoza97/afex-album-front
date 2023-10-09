import { LoaderStyles } from "./Styles";
import LoaderSVG from "../../assets/loader.svg?react";
import useVideoContext from "../../customHooks/useVideoContext";
import Texts from "../../const/Texts";

const Loader = () => {
  const { getState } = useVideoContext();

  return (
    <LoaderStyles>
      <div>
        <LoaderSVG />
        <p>{Texts[getState().loaderMessaje]}</p>
      </div>
    </LoaderStyles>
  );
};

export default Loader;
