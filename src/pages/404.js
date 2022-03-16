import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import "../styles/global.css"
import * as styles from "../styles/404.module.css"
import { Link } from "gatsby"

export default function NotFound() {
  return (
    <div>
      <nav>
        <div className={styles.header}>
          <div>
            <Link to="/">
              <div className={styles.headerLogo}>
                <div>
                  <StaticImage
                    src="../images/logo.png"
                    alt="logo"
                    placeholder="blurred"
                    layout="fixed"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className={styles.name}>@fandres51</p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <a
              href="https://linktr.ee/fandres"
              target="_blank"
              rel="noreferrer"
            >
              Contáctame
            </a>
          </div>
        </div>
      </nav>
      <div>
          <div className={styles.error}>
              <p>404</p>
          </div>
          <div className={styles.errorMessage}>
              <p>Parece que la página que estás buscando no existe</p>
          </div>
      </div>
      <footer>
        <div className={styles.copyright}>
          <p>Copyright 2022 Fabio Enríquez</p>
        </div>
      </footer>
    </div>
  )
}
