import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18next.ts";
import store from "./store/store.ts";

const root = createRoot(document.getElementById("root")!);

function renderApp() {
  fancyLog();
  root.render(
    <>
      <StrictMode>
        <App />
      </StrictMode>
    </>
  );
}

function fancyLog() {
  console.log("%c Rendered with👌👍", "background: purple; color: #fff");
  console.log(store.getState());
}

renderApp();
store.subscribe(renderApp);
