import Texts from "../../const/Texts";
import { AddSectionStyles } from "./Styles";

const AddSection = () => {
  return (
    <AddSectionStyles>
      <input type="text" placeholder={Texts.ADD} />
      <button>{Texts.ADD}</button>
    </AddSectionStyles>
  );
};

export default AddSection;
