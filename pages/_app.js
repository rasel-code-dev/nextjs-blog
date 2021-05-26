import 'styles/global.css'
import Navigation from "components/Navigation";

import  styles from "./app.module.scss"

function App({ Component, pageProps }) {
  return (
    <div>
      <Navigation />
      <div className={styles.release_height}/>
      <Component {...pageProps} />
    </div>
  )
}

export default App