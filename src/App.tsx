import { GlobalStyles } from "./GlobalStyles";
import AddSection from "./components/AddSection";
import ModalWrapper from "./components/ModalWrapper";
import SiteWrapper from "./components/SiteWrapper";
import Title from "./components/Title";
import VideosSection from "./components/VideosSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <SiteWrapper>
        <ModalWrapper />
        <main>
          <Title />
          <AddSection />
          <VideosSection />
        </main>
      </SiteWrapper>
    </>
  );
}

export default App;
