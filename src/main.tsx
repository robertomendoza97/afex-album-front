import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { VideoContextProvider } from "./context/video-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <VideoContextProvider>
    <App />
  </VideoContextProvider>
);
