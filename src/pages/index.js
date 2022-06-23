import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"

import "../styles/global.css"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Fabio Andrés Enríquez</title>
      </Helmet>
      <nav>
        <div className={styles.header}>
          <div>
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
          <div>
            <a
              href="https://linktr.ee/fandres51"
              target="_blank"
              rel="noreferrer"
            >
              Contáctame
            </a>
          </div>
        </div>
      </nav>
      <div className={styles.banner}>
        <div>
          <div>
            <p className={styles.bannerDesc}>
              Soy Fabio Andrés Enríquez, un Ingeniero en Sistemas dedicado al
              Márketing Digital de Quito, Ec.
            </p>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/fabio-andres-enriquez-476692194/"
              target="_blank"
              rel="noreferrer"
              className={styles.bannerBtn}
            >
              <div>
                <p>Encuéntrame en Linkedin</p>
              </div>
            </a>
          </div>
        </div>
        <div>
          <StaticImage
            src="../images/bannerimg.png"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            width={320}
            height={320}
          />
        </div>
      </div>
      <div className={styles.about}>
        <div>
          <h2>Acerca de mi</h2>
        </div>
        <div>
          <p>
            Hola, soy un Ingeniero en Sistemas ecuatoriano dedicado actualmente
            al márketing y la creatividad. Siempre estoy buscando vivir nuevas
            experiencias, conocer nuevas personas y aprender cosas nuevas.{" "}
            <br />
            <br />
            Me apasiona cómo la tecnología cambió y está cambiando la forma en
            que vivimos y nos relacionamos, por lo cual, estoy estudiando
            marketing digital como complemento de mi primera carrera. <br />
            <br />
            Además, también soy un desarrollador fullstack de JavaScript.
          </p>
        </div>
      </div>
      <footer>
        <div className={styles.footer}>
          <div>
            <h2>Encuéntrame en</h2>
          </div>
          <div className={styles.footerEmail}>
            <p>fabio.and1514@gmail.com</p>
          </div>
          <div className={styles.footerOrText}>
            <p>o en mis redes sociales</p>
          </div>
          <div className={styles.redes}>
            <a
              href="http://instagram.com/fandres51"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={25}></FaInstagram>
            </a>
            <a
              href="http://twitter.com/fandres51"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter size={25}></FaTwitter>
            </a>
            <a
              href="https://www.linkedin.com/in/fabio-andres-enriquez-476692194/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={25}></FaLinkedin>
            </a>
          </div>
          <div className={styles.copyright}>
            <p>Copyright &copy; 2022 Fabio Enríquez</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
