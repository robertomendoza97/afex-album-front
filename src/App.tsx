import { GlobalStyles } from "./GlobalStyles";
import AddSection from "./components/AddSection";
import SiteWrapper from "./components/SiteWrapper";
import Title from "./components/Title";

function App() {
  return (
    <>
      <GlobalStyles />
      <SiteWrapper>
        <main>
          <Title />
          <AddSection />
        </main>
      </SiteWrapper>
    </>
  );
}

export default App;
