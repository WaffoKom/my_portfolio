import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "./i18next.ts";
import store from "./store/store.ts";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root")!);

function renderApp() {
  fancyLog();

  root.render(
    <>
      <StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
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
