import LABELS from "../../const/labels";
import { NoVideosStyles } from "./Styles";

const NoVideos = () => {
  return (
    <NoVideosStyles>
      <p>{LABELS.WELCOME}</p>
      <p>{LABELS.FOLLOW_STEPS}</p>
      <ol>
        <li>
          {LABELS.STEP1}
          <a href={LABELS.YOUTUBE_LINK} target="_blank">
            {LABELS.YOUTUBE}
          </a>
        </li>
        <li>{LABELS.STEP2}</li>
        <li>{LABELS.STEP3}</li>
        <li>{LABELS.STEP4}</li>
        <li>{LABELS.STEP5}</li>
      </ol>
    </NoVideosStyles>
  );
};

export default NoVideos;
