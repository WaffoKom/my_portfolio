import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./i18next.ts";
import store from "./store/store.ts";
import { Provider } from "react-redux";

import ThemeProvider from "./components/ThemeProvider/ThemeProvider.tsx";

const root = createRoot(document.getElementById("root")!);

function renderApp() {
  fancyLog();

  root.render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  );
}

function fancyLog() {
  console.log("%c Rendered with👌👍", "background: purple; color: #fff");
  console.log(store.getState());
}

renderApp();
store.subscribe(renderApp);
