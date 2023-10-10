import { MouseEvent } from "react";
import LABELS from "../../const/labels";
import useVideoContext from "../../customHooks/useVideoContext";
import { ErrorsStyles } from "./Styles";
import danger from "../../assets/peligro.png";
import ok from "../../assets/ok.png";
import check from "../../assets/cheque.png";

const Errors = () => {
  const { getState } = useVideoContext();

  const imgs: Record<string, string> = {
    ERROR_409: danger,
    ERROR_404: danger,
    SAVED: ok,
    DELETED: check,
    INVALID_LINK: danger
  };

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <ErrorsStyles onClick={handleClick}>
      <img src={imgs[getState().loaderMessaje]} alt="some img" />
      <p>{LABELS[getState().loaderMessaje]}</p>
    </ErrorsStyles>
  );
};

export default Errors;
