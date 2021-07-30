import "/styles/global.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
