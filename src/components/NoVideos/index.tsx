import Texts from "../../const/Texts";
import { NoVideosStyles } from "./Styles";

const NoVideos = () => {
  return (
    <NoVideosStyles>
      <p>{Texts.WELCOME}</p>
      <p>{Texts.FOLLOW_STEPS}</p>
      <ol>
        <li>
          {Texts.STEP1}
          <a href={Texts.YOUTUBE_LINK} target="_blank">
            {Texts.YOUTUBE}
          </a>
        </li>
        <li>{Texts.STEP2}</li>
        <li>{Texts.STEP3}</li>
        <li>{Texts.STEP4}</li>
        <li>{Texts.STEP5}</li>
      </ol>
    </NoVideosStyles>
  );
};

export default NoVideos;
