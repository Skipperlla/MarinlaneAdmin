import "@assets/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@layout/Layout";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import "@lib/Icon";
import { useEffect } from "react";
import Cookies from "js-cookie";
import "react-pro-sidebar/dist/css/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Cookies.set(
      "token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTY5Zjk3MjIxMmUyZjM1NGUyNWNkYSIsImlhdCI6MTYzODMwOTc4NCwiZXhwIjoxNjY5ODQ1Nzg0fQ.UOA8sbAMdSSCbk6u3M-KRDPYhCU1FVj8Bqmh5xcqjec"
    );
  }, []);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
