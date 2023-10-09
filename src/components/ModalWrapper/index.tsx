import { useRef, MouseEvent, useEffect } from "react";
import { ModalWrapperStyles } from "./Styles";
import useVideoContext from "../../customHooks/useVideoContext";

const ModalWrapper = () => {
  const { getState, showModal } = useVideoContext();
  const idTimeout = useRef<NodeJS.Timeout | null>(null);

  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (idTimeout.current) {
      clearTimeout(idTimeout.current);
      showModal(false);
    }
  };

  useEffect(() => {
    const id = setTimeout(() => {
      showModal(false);
    }, 5000);

    idTimeout.current = id;

    return () => {
      if (idTimeout.current) {
        clearTimeout(idTimeout.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getState().showModal]);

  return (
    <ModalWrapperStyles
      $show={getState().showModal ? "show" : ""}
      onClick={handleClick}
      data-modal="modal"
    >
      {getState().modalContent}
    </ModalWrapperStyles>
  );
};

export default ModalWrapper;
