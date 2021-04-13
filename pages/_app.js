import { CssBaseline } from "@material-ui/core";
import Navigation from "../components/Navigation";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import "../styles/global.scss";
import theme from "../theme";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

import createStore from "../store";

const store = createStore({});

function App({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  );
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(App);
