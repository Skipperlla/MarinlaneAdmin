import "@assets/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import type { AppProps } from "next/app";
import Layout from "@layout/Layout";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../store/store";
import "utils/lib/Icon";

import "react-pro-sidebar/dist/css/styles.css";
import { AuthProvider } from "utils/contexts/useAuth";
import ToasterContainer from "@components/ToasterContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        <ToasterContainer />
      </AuthProvider>
    </Provider>
  );
}
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);
