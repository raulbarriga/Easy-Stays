import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish); // also finish in case of route errors

// this is the starting point where the pages get built up
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
