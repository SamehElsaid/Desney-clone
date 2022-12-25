import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../Redux/Store";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        
      </Head>
      <Component {...pageProps}  />
    </Provider>
  );
}
