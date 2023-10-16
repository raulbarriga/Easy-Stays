import { useRouter } from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

import "@/styles/globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

const useRouterEvents = () => {
  const router = useRouter();

  router.events.on("routeChangeStart", progress.start);
  router.events.on("routeChangeComplete", progress.finish);
  router.events.on("routeChangeError", progress.finish); // also finish in case of route errors
};

const RootLayout = ({ children, placeholder }) => {
  useRouterEvents();

  return (
    <html lang="en">
      <body>
        <Header placeholder={placeholder} />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
