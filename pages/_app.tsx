import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Header from "../component/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
