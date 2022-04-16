import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa"

import "../styles/global.css"
import * as styles from "../styles/home.module.css"

export default function Home() {
  return (
    <div>
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
              href="https://linktr.ee/fandres"
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
              Soy Fabio Andrés Enríquez, un desarrollador web/mobil y diseñador
              UX de Quito, Ec.
            </p>
          </div>
          <div>
            <a
              href="https://github.com/fandres51"
              target="_blank"
              rel="noreferrer"
              className={styles.bannerBtn}
            >
              <div>
                <p>Mira mi portafolio</p>
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
            Soy Ingeniero en Sistemas Informáticos y de Computación graduado de
            la Escuela Politécnica Nacional (Quito). Me especializo en
            desarrollo web y mobil, para lo cual utilizo principalmente
            Javascript, React, Express, MongoDB y Flutter. Actualmente me
            encuentro estudiando una segunda carrera, siendo esta publicidad, en
            la Universidad de las Américas mientras me desempeño como
            freelancer.
          </p>
        </div>
      </div>
      <footer>
        <div className={styles.footer}>
          <div>
            <h2>Contáctame en</h2>
          </div>
          <div className={styles.footerEmail}>
            <p>fabio.and1514@gmail.com</p>
          </div>
          <div className={styles.footerOrText}>
            <p>o en mis redes sociales</p>
          </div>
          <div className={styles.redes}>
            <a href="https://wa.me/593982930595" target="_blank" rel="noreferrer">
              <FaWhatsapp size={25}></FaWhatsapp>
            </a>
            <a href="http://twitter.com/fandres51" target="_blank" rel="noreferrer">
              <FaTwitter size={25}></FaTwitter>
            </a>
            <a href="http://instagram.com/fandres51" target="_blank" rel="noreferrer">
              <FaInstagram size={25}></FaInstagram>
            </a>
            <a href="https://www.linkedin.com/in/fabio-andr%C3%A9s-enr%C3%ADquez-476692194" target="_blank" rel="noreferrer">
              <FaLinkedin size={25}></FaLinkedin>
            </a>
            <a href="http://github.com/fandres51" target="_blank" rel="noreferrer">
              <FaGithub size={25}></FaGithub>
            </a>
          </div>
          <div className={styles.copyright}>
            <p>Copyright 2022 Fabio Enríquez</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
